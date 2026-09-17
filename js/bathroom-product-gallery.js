(() => {
  'use strict';
  const data = window.ROOM_PICK_BATHROOM;
  if (!data || !data.canShowPhoto) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const available = product => data.canShowPhoto(product.photo);
  const photoRegistry = new Map();
  let photoNumber = 0;
  const figure = product => {
    if (!available(product)) return '';
    const photo = product.photo;
    const id = String(++photoNumber);
    photoRegistry.set(id, photo);
    return `<figure class="bp-real-photo"><button type="button" class="bp-photo-open" data-bp-photo="${id}" aria-label="${escape(photo.label)} 제품 사진 확대"><img src="${escape(photo.src)}" alt="${escape(photo.label)} 제품 이미지" loading="lazy" decoding="async"><span>사진 크게 보기 ＋</span></button><figcaption><strong>${escape(photo.label)}</strong><span>${escape(photo.note)}</span><a href="${escape(photo.source)}" target="_blank" rel="noopener noreferrer">사진 출처: ${escape(photo.credit)} ↗</a></figcaption></figure>`;
  };
  const cards = document.getElementById('bp-category-grid');
  if (cards) {
    Object.values(data.categories).forEach((category,index) => {
      const product = category.products[0];
      if (!available(product)) return;
      const card = cards.children[index];
      const oldImage = card?.querySelector('img');
      if (!oldImage) return;
      const visual = document.createElement('div');
      visual.className = 'bp-card-product-photo';
      visual.innerHTML = `<img src="${escape(product.photo.src)}" alt="${escape(product.photo.label)} 제품 이미지" loading="lazy"><span>${escape(product.photo.label)}</span>`;
      oldImage.replaceWith(visual);
      const credit = document.createElement('small');
      credit.className = 'bp-card-photo-credit';
      credit.textContent = `제품 이미지 · ${product.photo.credit}${product.photo.note.includes('비교용') ? ' · 비교용 모델' : ''}`;
      card.querySelector('.bp-category-body').append(credit);
    });
    if (Object.values(data.categories).some(category => available(category.products[0]))) {
      cards.nextElementSibling.textContent = '제조사·판매처의 제품 이미지입니다. 원본 비율과 워터마크를 유지하며, 제품별 출처는 상세페이지에 표시합니다. 영상 동일 모델이 미확인인 사진은 비교용으로 구분했습니다.';
    }
  }
  const root = document.getElementById('bp-content');
  if (!root) return;
  if (root.hasAttribute('data-video-guide')) {
    const related = {
      tile: [data.categories.tiles.products[0], data.categories.tiles.products[3]],
      ceramic: [data.categories.toilets.products[0], data.categories.basins.products[0]],
      faucet: data.categories.faucets.products.slice(0,2),
      cabinet: [data.categories.cabinets.products[0]]
    };
    Object.entries(related).forEach(([id,products]) => {
      const article = document.getElementById(id);
      if (!article || !products.some(available)) return;
      const gallery = document.createElement('div');
      gallery.className = 'bp-related-photos';
      const note = id === 'ceramic' ? '영상에서 모델명이 확인된 제품 이미지' : '아래 사진은 비교용 제품입니다. 영상 속 동일 제품으로 확인된 사진이 아닙니다.';
      gallery.innerHTML = `<p class="bp-photo-context">${note}</p><div class="bp-related-grid">${products.map(figure).join('')}</div>`;
      article.querySelector('h2').after(gallery);
    });
  } else {
    const key = new URLSearchParams(location.search).get('category') || 'tiles';
    const category = Object.hasOwn(data.categories,key) ? data.categories[key] : null;
    if (!category) return;
    if (available(category.products[0])) {
      const heroFigure = root.querySelector('.bp-hero figure');
      heroFigure.outerHTML = figure(category.products[0]);
    }
    const photoCards = category.products.map((product,index) => {
      if (!available(product)) return '';
      return `<a class="bp-photo-choice" href="#product-${index+1}"><span class="bp-choice-image"><img src="${escape(product.photo.src)}" alt="${escape(product.photo.label)}" loading="lazy"></span><span class="bp-tag">${String(index+1).padStart(2,'0')} · ${escape(product.priority || '비교 대안')}</span><strong>${escape(product.photo.label)}</strong><span>${product.price == null ? '가격 확인 필요' : `${product.price.toLocaleString('ko-KR')}원`}</span><small>${escape(product.photo.credit)}</small></a>`;
    }).join('');
    if (photoCards) {
      const overview = document.createElement('section');
      overview.className = 'bp-photo-overview';
      overview.innerHTML = `<p class="bp-kicker">PRODUCT PHOTO COLLECTION</p><h2>사진으로 먼저 비교하세요</h2><p>제품을 선택하면 큰 사진과 규격·가격을 함께 볼 수 있습니다.</p><div class="bp-photo-choice-grid">${photoCards}</div>`;
      root.querySelector('.bp-hero').after(overview);
    }
    category.products.forEach((product,index) => {
      const article = document.getElementById(`product-${index+1}`);
      if (!article || !available(product)) return;
      const copy = document.createElement('div');
      copy.className = 'bp-product-copy';
      while (article.firstChild) copy.append(article.firstChild);
      article.classList.add('bp-product-with-photo');
      article.innerHTML = figure(product);
      article.append(copy);
    });
  }
  if (data.photoPreview && [...photoRegistry.values()].some(photo => photo.permission !== 'approved')) {
    const previewNote = document.createElement('p');
    previewNote.className = 'bp-photo-preview-note';
    previewNote.textContent = '사진 우선 로컬 미리보기 · 제품별 이미지 대조 완료. 외부 사진의 공개 게시 허락은 아직 확인되지 않았습니다.';
    root.querySelector('.bp-nav')?.after(previewNote);
  }
  if (!photoRegistry.size) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'bp-photo-dialog';
  dialog.setAttribute('aria-labelledby','bp-photo-dialog-title');
  dialog.innerHTML = '<div class="bp-photo-dialog-head"><h2 id="bp-photo-dialog-title"></h2><button type="button" aria-label="사진 확대 닫기">×</button></div><img alt=""><p class="bp-photo-dialog-note"></p><a target="_blank" rel="noopener noreferrer">사진 출처 보기 ↗</a>';
  document.body.append(dialog);
  let opener;
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-bp-photo]');
    if (!button) return;
    const photo = photoRegistry.get(button.dataset.bpPhoto);
    if (!photo) return;
    opener = button;
    dialog.querySelector('h2').textContent = photo.label;
    const image = dialog.querySelector('img');
    image.src = photo.src;
    image.alt = photo.label;
    dialog.querySelector('.bp-photo-dialog-note').textContent = `${photo.note} · 원본 해상도로 표시하며 작은 이미지를 억지로 확대하지 않습니다.`;
    dialog.querySelector('a').href = photo.source;
    dialog.showModal();
  });
  dialog.querySelector('button').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => { if(event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close',() => opener?.focus());
  document.querySelectorAll('.bp-real-photo img,.bp-photo-choice img,.bp-card-product-photo img').forEach(image => {
    image.addEventListener('error',() => {
      image.hidden = true;
      const message = document.createElement('span');
      message.className = 'bp-photo-unavailable';
      message.textContent = '사진을 불러오지 못했습니다. 제품 출처에서 원본 사진을 확인해 주세요.';
      image.after(message);
    },{once:true});
  });
})();
