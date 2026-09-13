const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const collectionLines = {
  entry: { label: 'ENTRY LINE', title: '작지만 선명한 첫 만남', text: '디테일을 담은 소형 아트 피규어와 봉제 키링, 투명 아크릴 스탠드, 데코 스티커로 모앙이를 가장 가까이 만나보세요.', keywords: 'FIGURE<br>KEYRING<br>STICKER' },
  lifestyle: { label: 'LIFESTYLE LINE', title: '여행의 감성을 일상으로', text: '프리미엄 자수 호텔 타월, 릴랙스 수면안대, 시그니처 그래픽 티셔츠와 양우산으로 제주를 일상에 이어갑니다.', keywords: 'TOWEL<br>T-SHIRT<br>UMBRELLA' },
  local: { label: 'LOCAL F&B LINE', title: '제주의 맛을 새롭게', text: '구좌 당근 카라멜과 블렌딩 티백, 우도 땅콩 수제 쿠키와 스프레드, 한라봉 과즙 에디션으로 로컬의 맛을 전합니다.', keywords: 'CARROT<br>PEANUT<br>HALLABONG' },
  space: { label: 'SPACE LINE', title: '함덕에서 만나는 모앙이', text: '함덕 바다 앞 대형 포토존과 굿즈 체험 공간이 결합된 플래그십 쇼룸으로 완성되는 오프라인 경험입니다.', keywords: 'HAMDEOK<br>PHOTO ZONE<br>SHOWROOM' }
};

document.querySelectorAll('.collection-tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.collection-tab').forEach((item) => {
    item.classList.remove('active');
    item.setAttribute('aria-selected', 'false');
  });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const item = collectionLines[tab.dataset.line];
  document.querySelector('#collection-panel').innerHTML = `<div><span>${item.label}</span><h3>${item.title}</h3><p>${item.text}</p></div><p class="collection-keyword">${item.keywords}</p>`;
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
