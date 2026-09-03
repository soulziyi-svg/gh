from __future__ import annotations

import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from yt_dlp import YoutubeDL


ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"
DB = DATA / "interior_reference.sqlite3"

CHANNELS = [
    ("인테리어언니 백예진", "https://www.youtube.com/@intelliunnie/videos"),
    ("오늘의집", "https://www.youtube.com/@OhouseKR/videos"),
    ("쿤하우스", "https://www.youtube.com/@Koonhous/videos"),
    ("아정당 인테리어", "https://www.youtube.com/@아정당인테리어/videos"),
]


SCHEMA = """
CREATE TABLE IF NOT EXISTS channels (
  channel_key TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  channel_id TEXT,
  collected_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS videos (
  video_id TEXT PRIMARY KEY,
  channel_key TEXT NOT NULL,
  title TEXT NOT NULL,
  video_url TEXT NOT NULL,
  duration_seconds INTEGER,
  upload_date TEXT,
  description TEXT,
  availability TEXT,
  collected_at TEXT NOT NULL,
  analysis_status TEXT NOT NULL DEFAULT 'pending',
  FOREIGN KEY(channel_key) REFERENCES channels(channel_key)
);
CREATE TABLE IF NOT EXISTS analyses (
  video_id TEXT PRIMARY KEY,
  summary TEXT,
  spaces_json TEXT,
  trades_json TEXT,
  design_principles_json TEXT,
  diy_steps_json TEXT,
  cautions_json TEXT,
  cost_mentions_json TEXT,
  self_difficulty INTEGER,
  evidence_json TEXT,
  analyzed_at TEXT,
  FOREIGN KEY(video_id) REFERENCES videos(video_id)
);
CREATE INDEX IF NOT EXISTS idx_videos_channel ON videos(channel_key);
CREATE INDEX IF NOT EXISTS idx_videos_status ON videos(analysis_status);
"""


def collect_channel(name: str, url: str) -> dict:
    opts = {
        "quiet": True,
        "extract_flat": "in_playlist",
        "skip_download": True,
        "ignoreerrors": True,
        "playlistend": None,
    }
    with YoutubeDL(opts) as ydl:
        info = ydl.extract_info(url, download=False)
    if not info:
        raise RuntimeError(f"채널 정보를 가져오지 못했습니다: {name}")
    return info


def main() -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    now = datetime.now(timezone.utc).isoformat()
    report = {"collected_at": now, "channels": []}
    con = sqlite3.connect(DB)
    con.executescript(SCHEMA)

    for name, url in CHANNELS:
        info = collect_channel(name, url)
        channel_key = info.get("channel_id") or info.get("id") or name
        entries = [entry for entry in (info.get("entries") or []) if entry]
        con.execute(
            "INSERT OR REPLACE INTO channels VALUES (?, ?, ?, ?, ?)",
            (channel_key, name, url, info.get("channel_id"), now),
        )
        inserted = 0
        for entry in entries:
            video_id = entry.get("id")
            if not video_id:
                continue
            video_url = entry.get("url") or f"https://www.youtube.com/watch?v={video_id}"
            if not video_url.startswith("http"):
                video_url = f"https://www.youtube.com/watch?v={video_id}"
            con.execute(
                """INSERT INTO videos
                (video_id, channel_key, title, video_url, duration_seconds, upload_date,
                 description, availability, collected_at, analysis_status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
                ON CONFLICT(video_id) DO UPDATE SET
                  channel_key=excluded.channel_key,
                  title=excluded.title,
                  video_url=excluded.video_url,
                  duration_seconds=excluded.duration_seconds,
                  upload_date=excluded.upload_date,
                  description=excluded.description,
                  availability=excluded.availability,
                  collected_at=excluded.collected_at""",
                (
                    video_id,
                    channel_key,
                    entry.get("title") or "제목 없음",
                    video_url,
                    entry.get("duration"),
                    entry.get("upload_date"),
                    entry.get("description"),
                    entry.get("availability"),
                    now,
                ),
            )
            inserted += 1
        report["channels"].append(
            {"name": name, "channel_key": channel_key, "source_url": url, "videos": inserted}
        )
        con.commit()

    total = con.execute("SELECT COUNT(*) FROM videos").fetchone()[0]
    report["total_videos"] = total
    (DATA / "collection_report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    con.close()
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
