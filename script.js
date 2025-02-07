    //Switcher
const modeSwitcher = document.querySelector('#mode__switcher');
const switch_ground = document.querySelector('.mode__background');
const modeBorder = document.querySelector('.mode__border');

    //Main Tags
const specialTitle = document.querySelector('.specials__container > h1');
const grayground = document.querySelectorAll('.grayground');
const greenBtn = document.querySelectorAll('.btn-green');
const transBtn = document.querySelector('.btn');
const navBoxJs = document.querySelector('.nav2');
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
const joinbtn = document.querySelector('.join-left > .btn');
const joinback = document.querySelector('.join_container');
const jointitle = document.querySelector('.white-title');
const footerInput = document.querySelector('.footer-form > input');

const triangle = document.querySelectorAll('.shape-fill');

    //Good text
const text = document.querySelectorAll('\
 li > a, .hero__title , \
 .text , .title , .sub-title ,\
 .message-text, \
 .strategy__data, .strategy__title, .strategy__data > span, \
 .review_author_prof, \
 .footer-quote, .footer-bottom > p');
 
    //Footer media
const footerMedia = document.querySelectorAll('.socials > .social > img');
const mediaArray = Array.from(footerMedia);
 
    //Burger
const BurgerSpan = document.querySelector('.burger > span');
const Burger = document.querySelector('.burger');
const navOverlay = document.querySelector('.overlay__left');
const burgerLink = document.querySelector('.overlay__left > ul');
const burgerBtn = document.querySelector('.overlay-btn-wrapper > .btn')


// Mode switcher
var position = "right-light";

function mode_switch(){

  if(position == "left-dark"){
    position = "right-light"
    modeSwitcher.style.transform = "rotate(180deg)";
      switch_ground.style.backgroundColor = "#A8A0BA";
      modeSwitcher.style.setProperty('background', 'var(--s-gradient)');
      specialTitle.style.color = 'white';
      modeBorder.style.border = '3px solid #C5EFCB';
      transBtn.style.color = '#bcd0e5';
      watchBtn.style.color = '#C5EFCB';
      play.src = 'img/Dark mode/play.png';
      mainWrapper.style.backgroundColor = "#072636";
      processBack.style.backgroundColor = "#333240";
      strategiesBack.style.setProperty('background', 'var(--sec-back-gradient)');
      joinbtn.style.setProperty('background', 'var(--richblack)');
      joinbtn.style.setProperty('color', 'var(--s-green)');
      joinback.style.setProperty('background', 'var(--avocado)');
      jointitle.style.setProperty('color', 'var(--richblack)');
      footerInput.style.backgroundColor = "#051A24";
      footerInput.style.border = '1px solid #C5EFCB';

      for(triangleElement of triangle){
        triangleElement.style.fill = '#333240';
      }

      mediaArray[0].src = 'img/Dark mode/instagram.png';
      mediaArray[1].src = 'img/Dark mode/facebook.png';
      mediaArray[2].src = 'img/Dark mode/twitter.png';

      for(const logoElement of logoText){
        logoElement.style.color = "#16F4D0";
      }
      for(const logoImgElement of logoImg){
        logoImgElement.src = 'img/Dark mode/logo.png';
      }
     
      // Burger
      BurgerSpan.style.setProperty('background', 'var(--s-green)');
      Burger.classList.add('blackstar');
      navOverlay.style.background = '#1C3144';
      burgerLink.style.color = 'EFAAC4'
      burgerBtn.style.border = '1px solid #bcd0e5'

      
      navBoxJs.classList.remove('nav2');
      navBoxJs.classList.add('nav2-js');

      for(const BTNelement of greenBtn){
        BTNelement.classList.add('btn-green-js');
        BTNelement.classList.remove('btn-green');
        BTNelement.style.color = 'black';
        BTNelement.style.setProperty('background', 'var(--s-green)');

      };

      for (const element of grayground) {
        element.style.backgroundColor = '#333240';
      };

      for (const TEXTelement of text) {
        TEXTelement.style.color = '#A49DFF';
      };

      for(const priceElement of priceItem){
        priceElement.style.boxShadow = '0px 2px 8px 0px #16F4D0';
      };
      
      for(const strategyElement of strategyItem){
        strategyElement.style.border = '1px solid #16F4D0';
      };

      for(const reviewElement of reviewItem){
        reviewElement.style.border = '1px solid #16F4D0';
      };


  } else {
    position = "left-dark"
    modeSwitcher.style.transform = "rotate(0deg)";
      switch_ground.style.backgroundColor = "#F3F3F3";
      modeSwitcher.style.setProperty('background', 'var(--m-gradient)');
      specialTitle.style.color = 'black';
      modeBorder.style.border = '3px solid #027366';
      transBtn.style.color = 'black';
      watchBtn.style.color = '#02897a';
      play.src = 'img/Original img/play.png';
      mainWrapper.style.backgroundColor = "white";
      processBack.style.backgroundColor = "#E5E5E5";
      strategiesBack.style.setProperty('background', 'var(--main-back-gradient');
      joinbtn.style.setProperty('background', 'var(--white)');
      joinbtn.style.setProperty('color', 'var(--m-green)');
      joinback.style.setProperty('background', 'var(--m-green)');
      jointitle.style.setProperty('color', 'var(--white)');

      footerInput.style.backgroundColor = "white";
      footerInput.style.border = '1px solid #BCD0E5'

      for(triangleElement of triangle){
        triangleElement.style.fill = '#E5E5E5';
      }

      mediaArray[0].src = 'img/Original img/logo_instagram.png';
      mediaArray[1].src = 'img/Original img/logo_facebook.png';
      mediaArray[2].src = 'img/Original img/logo_twitter.png';

      for(const logoElement of logoText){
        logoElement.style.color = "#173A56";
      }
      for(const logoImgElement of logoImg){
        logoImgElement.src = 'img/Original img/logo.png';
      }

      // Burger
      BurgerSpan.style.setProperty('background', 'var(--m-green)');
      Burger.classList.remove('blackstar');
      navOverlay.style.background = '#A29794'
      burgerBtn.style.border = '1px solid #173A56'
      
      navBoxJs.classList.add('nav2');
      navBoxJs.classList.remove('nav2-js');
  

      for(const BTNelement of greenBtn){
        BTNelement.classList.add('btn-green');
        BTNelement.classList.remove('btn-green-js');
        BTNelement.style.color = 'white';
        BTNelement.style.setProperty('background', 'var(--m-green)');
      };
      for (const element of grayground) {
        element.style.backgroundColor = '#E5E5E5';
      };
      for (const TEXTelement of text) {
        TEXTelement.style.color = '#22343D';
      };
      for(const priceElement of priceItem){
        priceElement.style.boxShadow = '0px 2px 8px 0px #00000040';
      };
      for(const strategyElement of strategyItem){
        strategyElement.style.border = '1px solid #DEDEDE';
      };
      for(const reviewElement of reviewItem){
        reviewElement.style.border = '1px solid #DEDEDE';
      };

}
}

mode_switch()


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






































// Загрузочный экран

// const body = document.getElementsByTagName("body")[0];
// const loader = document.getElementById("loadscreen");
// const spans = document.getElementById("loadscreen");
// let finish = false;

// document.addEventListener("DOMContentLoaded", () => {
//   finish = true;
//   if(finish == true){
//     const movetoTop = setInterval(function () {
//       loader.style.top = "-100%"
//       body.style.overflow = "visible"
//       if(body.style.overflow = "visible"){
//         spans.style.transform
//       }
//     }, 1000)
//   }
// });




