// Переменные для работы с темами и элементами
const modeSwitcher = document.querySelector('#mode__switcher');
const switchGround = document.querySelector('.mode__background');
const modeBorder = document.querySelector('.mode__border');
const specialTitle = document.querySelector('.specials__container > h1');
const grayground = document.querySelectorAll('.grayground');
const greenBtn = document.querySelectorAll('.btn-green');
const transBtn = document.querySelector('.btn');
const navBox = document.querySelector('.nav2');
const watchBtn = document.querySelector('.btn-trans');
const play = document.querySelector('.btn-trans > img');
const logoText = document.querySelectorAll('.logo > p');
const logoImg = document.querySelectorAll('.logo > img');
const mainWrapper = document.querySelector('.wrapper');
const processBack = document.querySelector('.process');
const strategiesBack = document.querySelector('.strategies');
const strategyItem = document.querySelectorAll('.strategy');
const priceItem = document.querySelectorAll('.brief_item');
const reviewItem = document.querySelectorAll('.review_item');
const joinBtn = document.querySelector('.join-left > .btn');
const joinBack = document.querySelector('.join_container');
const joinTitle = document.querySelector('.white-title');
const footerInput = document.querySelector('.footer-form > input');
const triangle = document.querySelectorAll('.shape-fill');
const footerMedia = Array.from(document.querySelectorAll('.socials > .social > img'));
const text = document.querySelectorAll(`li > a, .hero__title, .text, .title, .sub-title, .message-text, .strategy__data, .strategy__title, .strategy__data > span, .review_author_prof, .footer-quote, .footer-bottom > p`);

// Хранение стилей для тем
const themes = {
  dark: {
    switchGroundColor: "#A8A0BA",
    modeSwitcherBg: 'var(--s-gradient)',
    titleColor: 'white',
    modeBorder: '3px solid #C5EFCB',
    transBtnColor: '#bcd0e5',
    watchBtnColor: '#C5EFCB',
    playImgSrc: 'img/Dark mode/play.png',
    mainWrapperBg: "#072636",
    processBackBg: "#333240",
    strategiesBackBg: 'var(--sec-back-gradient)',
    joinBtnBg: 'var(--richblack)',
    joinBtnColor: 'var(--s-green)',
    joinBackBg: 'var(--avocado)',
    joinTitleColor: 'var(--richblack)',
    footerInputBg: "#051A24",
    footerInputBorder: '1px solid #C5EFCB',
    triangleFill: '#333240',
    mediaSources: ['img/Dark mode/instagram.png', 'img/Dark mode/facebook.png', 'img/Dark mode/twitter.png'],
    logoTextColor: "#16F4D0",
    logoImgSrc: 'img/Dark mode/logo.png',
    navOverlayBg: '#1C3144',
    burgerLinkColor: 'EFAAC4',
    navClassRemove: 'nav2',
    navClassAdd: 'nav2-js',
    btnGreenClassRemove: 'btn-green',
    btnGreenClassAdd: 'btn-green-js',
    btnGreenColor: 'black',
    btnGreenBg: 'var(--s-green)',
    graygroundColor: '#333240',
    textColor: '#A49DFF',
    priceItemShadow: '0px 2px 8px 0px #16F4D0',
    strategyBorder: '1px solid #16F4D0',
    reviewBorder: '1px solid #16F4D0',
  },
  light: {
    switchGroundColor: "#F3F3F3",
    modeSwitcherBg: 'var(--m-gradient)',
    titleColor: 'black',
    modeBorder: '3px solid #027366',
    transBtnColor: 'black',
    watchBtnColor: '#02897a',
    playImgSrc: 'img/Original img/play.png',
    mainWrapperBg: "white",
    processBackBg: "#EDEDED",
    strategiesBackBg: 'var(--main-back-gradient)',
    joinBtnBg: 'var(--white)',
    joinBtnColor: 'var(--m-green)',
    joinBackBg: 'var(--m-green)',
    joinTitleColor: 'var(--white)',
    footerInputBg: "white",
    footerInputBorder: '1px solid #BCD0E5',
    triangleFill: '#E5E5E5',
    mediaSources: ['img/Original img/logo_instagram.png', 'img/Original img/logo_facebook.png', 'img/Original img/logo_twitter.png'],
    logoTextColor: "#173A56",
    logoImgSrc: 'img/Original img/logo.png',
    navOverlayBg: '#A29794',
    burgerLinkColor: '#173A56',
    navClassRemove: 'nav2-js',
    navClassAdd: 'nav2',
    btnGreenClassRemove: 'btn-green-js',
    btnGreenClassAdd: 'btn-green',
    btnGreenColor: 'white',
    btnGreenBg: 'var(--m-green)',
    graygroundColor: '#E5E5E5',
    textColor: '#22343D',
    priceItemShadow: '0px 2px 8px 0px #00000040',
    strategyBorder: '1px solid #DEDEDE',
    reviewBorder: '1px solid #DEDEDE',
  }
};

// Переключение темы
let position = "light"; // Начальная тема

// Угол поворота для modeSwitcher
let rotationAngle = 0;

function applyTheme(theme) {
  const t = themes[theme];

  switchGround.style.backgroundColor = t.switchGroundColor;
  modeSwitcher.style.setProperty('background', t.modeSwitcherBg);
  specialTitle.style.color = t.titleColor;
  modeBorder.style.border = t.modeBorder;
  transBtn.style.color = t.transBtnColor;
  watchBtn.style.color = t.watchBtnColor;
  play.src = t.playImgSrc;
  mainWrapper.style.backgroundColor = t.mainWrapperBg;
  processBack.style.backgroundColor = t.processBackBg;
  strategiesBack.style.setProperty('background', t.strategiesBackBg);
  joinBtn.style.setProperty('background', t.joinBtnBg);
  joinBtn.style.setProperty('color', t.joinBtnColor);
  joinBack.style.setProperty('background', t.joinBackBg);
  joinTitle.style.setProperty('color', t.joinTitleColor);
  footerInput.style.backgroundColor = t.footerInputBg;
  footerInput.style.border = t.footerInputBorder;

  triangle.forEach(element => element.style.fill = t.triangleFill);
  
  footerMedia.forEach((media, index) => media.src = t.mediaSources[index]);
  
  logoText.forEach(logo => logo.style.color = t.logoTextColor);
  logoImg.forEach(logo => logo.src = t.logoImgSrc);

  navBox.classList.remove(t.navClassRemove);
  navBox.classList.add(t.navClassAdd);

  greenBtn.forEach(btn => {
    btn.classList.add(t.btnGreenClassAdd);
    btn.classList.remove(t.btnGreenClassRemove);
    btn.style.color = t.btnGreenColor;
    btn.style.setProperty('background', t.btnGreenBg);
  });

  grayground.forEach(element => element.style.backgroundColor = t.graygroundColor);

  text.forEach(element => element.style.color = t.textColor);

  priceItem.forEach(element => element.style.boxShadow = t.priceItemShadow);
  strategyItem.forEach(element => element.style.border = t.strategyBorder);
  reviewItem.forEach(element => element.style.border = t.reviewBorder);

  // Добавляем поворот для кнопки modeSwitcher
  modeSwitcher.style.transform = `rotate(${rotationAngle}deg)`;
}

// Переключение темы по событию на элементе с id blyat
const blyatElement = document.getElementById('blyat');

blyatElement.addEventListener('click', () => {
  // Меняем угол поворота на 180 градусов с каждым кликом
  rotationAngle += 180;

  position = position === "light" ? "dark" : "light";
  applyTheme(position);
});

applyTheme(position); // Применить начальную тему








//  Бургер 

const BigMac = document.querySelector('.burger');
const NavOverlay = document.querySelector('.nav__overlay')
const body = document.querySelector('body');
function burger(){
  BigMac.classList.toggle('active')
  NavOverlay.classList.toggle('active')
  
  if(BigMac.className.includes('active')){
    body.style.overflow = 'hidden'
  }else{
    body.style.overflow = 'scroll'
  }
}







//Slider

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.strategy');
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active'); // Убираем активность с всех слайдов
    });

    slides[index].classList.add('active'); // Добавляем активность на текущий слайд

    // Обновляем активную точку
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Переходим к следующему слайду
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Переход к предыдущему слайду
    showSlide(currentIndex);
  }

  // Инициализация слайдера
  showSlide(currentIndex);

  // Обработчики событий для точек слайдера
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Переход к следующему/предыдущему слайду по кнопкам
  setInterval(nextSlide, 5000); // Автоматический переход через 5 секунд
});







//Загрузочный экран


const loader = document.getElementById("loadscreen");
const spans = document.getElementById("loadscreen");
let finish = false;

document.addEventListener("DOMContentLoaded", () => {
  finish = true;
  if(finish == true){
    const movetoTop = setInterval(function () {
      loader.style.top = "-100%"
      body.style.overflow = "visible"
      if(body.style.overflow = "visible"){
        spans.style.transform
      }
    }, 1000)
  }
});




