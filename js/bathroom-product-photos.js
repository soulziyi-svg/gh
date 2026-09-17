/* Product-page images, not AI space illustrations.
 * User confirmed publication permission on 2026-09-17. Source watermarks are not altered.
 */
(() => {
  const data = window.ROOM_PICK_BATHROOM;
  if (!data) return;
  const catalogueImage = (path, version) => `https://img.danuri.io/catalog-image/${path}.jpg?shrink=330:*&_v=${version}`;
  const tileImage = id => `https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/openapi/17977695/${id}.jpg?w=720&h=480`;
  const photos = {
    tiles: [
      [tileImage('1693286844155'), '백상타일 · 오늘의집'],
      [tileImage('1693285916959'), '백상타일 · 오늘의집'],
      [tileImage('1693286833654'), '백상타일 · 오늘의집'],
      [tileImage('1698284756878'), '백상타일 · 오늘의집'],
      [tileImage('1696906728381'), '백상타일 · 오늘의집']
    ],
    faucets: [
      ['https://cdn.imweb.me/thumbnail/20240628/15baca214a907.png', '오케이세라믹 · 비반트', '비반트 VAR-340L 무광 니켈 SUS', '영상 언급 브랜드의 비교용 모델 · 영상 동일 모델 미확인'],
      ['https://e-nuovo.co.kr/web/product/medium/202506/1b701aa9310eb56b690da8bb7857fbcd.jpg', '누오보 · 루바인', '루바인 아나톨레 FA01SH 무광 니켈', '영상 언급 브랜드의 비교용 모델 · 영상 동일 모델 미확인', 'https://e-nuovo.co.kr/product/detail.html?product_no=7330&cate_no=765&display_group=1'],
      [catalogueImage('273/547/013/ccb64971babc441397c7e60371b5e055', '20260917080535'), '다나와 · 대림바스'],
      [catalogueImage('252/108/101/213c76a089dd43818ef58671ae05995c', '20260917080441'), '다나와 · 한샘'],
      [catalogueImage('557/106/101/53ddd55c6d8e4941b314f99ab1c8a008', '20260917102754'), '다나와 · 아메리칸스탠다드']
    ],
    toilets: [
      ['https://d15mm.cafe24.com/web/product/big/202412/39e277b1f4081ca81d8c1d9965c3b6b9.jpg', '2255 · 대림바스'],
      [catalogueImage('321/495/056/d7c376eaa5ec400f968121712ab2c2f8', '20260917080534'), '다나와 · 대림바스'],
      [catalogueImage('906/138/101/264328cd2a66422596366f2b7efbda6d', '20260917171754'), '다나와 · 대림바스'],
      [catalogueImage('009/220/013/0164ba0d8dc6485397fecace45874bdc', '20260917121208'), '다나와 · 인토세라믹'],
      [catalogueImage('491/139/101/547ae34c3a6a4816b01b71b99245466e', '20260917080519'), '다나와 · 인토']
    ],
    basins: [
      ['https://www.daelimbath.com/upload/product/PL-1042_img.png', '대림바스 공식 제품 자료'],
      [catalogueImage('846/794/042/0d77cf6285014a73803e6d13d025fa74', '20260917080519'), '다나와 · 대림바스'],
      [catalogueImage('134/765/042/a10e78607a7644a3a386b09a20a21cee', '20260917080701'), '다나와 · 대림바스'],
      [catalogueImage('755/081/069/3e238480ab0f4ff8ad75463669103351', '20260917080441'), '다나와 · 아메리칸스탠다드'],
      [catalogueImage('380/106/101/3df55ad8034d43da9aba057c93e7bd81', '20260917080519'), '다나와 · 대림바스']
    ],
    cabinets: [
      [catalogueImage('691/960/016/5973bdd96b5b4ee5b386dc2280b52f9b', '20260917080645'), '다나와 · 파랑'],
      [catalogueImage('311/422/008/eea756cced944dcdbf05dfc447084d5d', '20260917080701'), '다나와 · 동해산업'],
      [catalogueImage('062/130/101/71a1c187283642c8b6c48cc7c1b0a5cf', '20260917080534'), '다나와 · 닥터바스'],
      [catalogueImage('905/130/101/3bd604b8a687423794058f9cee420f4d', '20260917080519'), '다나와 · 모아시스템즈'],
      [catalogueImage('009/418/008/9bbd41289e2c4d469d52790324bcbcca', '20260917080516'), '다나와 · 미노아']
    ]
  };
  Object.entries(photos).forEach(([key, entries]) => entries.forEach(([src, credit, label, note, source], i) => {
    const product = data.categories[key].products[i];
    product.photo = {src, credit, label:label || `${product.brand} ${product.model}`, note:note || '제품 페이지 대표 이미지 · 주문 옵션은 원문에서 확인', source:source || product.url, checkedAt:'2026-09-17', permission:'approved', permissionBasis:'사용자가 2026-09-17 대화에서 게시 허락을 받았다고 확인', type:'manufacturer-or-retailer-product-image'};
  }));
  data.photoPreview = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
  data.canShowPhoto = photo => !!photo && (photo.permission === 'approved' || data.photoPreview);
})();
