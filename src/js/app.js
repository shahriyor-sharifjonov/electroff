import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const disableMenu = document.querySelector('.disable-menu');
const firstMenu = document.querySelector('.first-menu');
const thirdMenu = document.querySelector('.third-menu');
const menuIcons = document.querySelector('.menu-icons');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    disableMenu.classList.toggle('active')
    body.classList.toggle('active')
    firstMenu.classList.toggle('active')
    thirdMenu.classList.toggle('active')
    menuIcons.classList.toggle('active')
    headerList.classList.toggle('active')
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const title = document.querySelector('.intro__title');


document.querySelectorAll('.partner__item').forEach( function ( el ) {
  const info = el.querySelector('.partner__info');
  el.addEventListener('mouseenter', ( e ) => {
    info.classList.add('active');
  });
  el.addEventListener('mouseleave', ( e ) => {
    info.classList.remove('active');
  });
})

document.querySelectorAll('.quiz').forEach(function ( el ) {
  const item = el.querySelectorAll('.quiz__item');
  const next = el.querySelectorAll('.quiz__next');
  const prev = el.querySelectorAll('.quiz__prev');
  next.forEach( function ( next ) {
    next.addEventListener('click', function ( e ) {
      for (let i = 0; i < item.length; i++) {
        if ( item[i].classList.contains('active') && !item[i].classList.contains('last') ) {
          item[i].classList.remove('active');
          item[i += 1].classList.add('active');
        }
      }
    })
  })

  prev.forEach( function ( prev ) {
    prev.addEventListener('click', function ( e ) {
      for (let i = 0; i < item.length; i++) {
        if ( item[i].classList.contains('active') && i > 0 ) {
          item[i].classList.remove('active');
          item[i -= 1].classList.add('active');
        }
      }
    })
  })
})


var phoneMask = IMask(
  document.getElementById('tel'), {
    mask: '+{7}(000)000-00-00'
  }
); 
var phoneMask2 = IMask(
  document.getElementById('tel2'), {
    mask: '+{7}(000)000-00-00'
  }
); 
var phoneMask3 = IMask(
  document.getElementById('tel3'), {
    mask: '+{7}(000)000-00-00'
  }
); 

document.querySelectorAll('.quiz').forEach(function(el){
  const range = el.querySelector('.quiz__range');
  const input = el.querySelector('.quiz__item_4-input');
  range.addEventListener('input', function(){
    input.value = range.value;
  })
  input.addEventListener('input', function(){
    range.value = input.value;
    if (this.value.length > 6) {
      this.value = this.value.slice(0,6); 
    }
  })
})

document.querySelectorAll('.open-popup').forEach(function(el){
  el.addEventListener('click', function(e){
    const target = el.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
    document.body.style.overflowY = "hidden";
  })
})

document.querySelector('.popup__close').addEventListener('click', function(el){
  document.getElementById('popup').classList.remove('active');
  document.body.style.overflowY = "auto";
})