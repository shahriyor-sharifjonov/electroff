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

document.querySelectorAll('.quiz').forEach(function ( el ) {
  const items = el.querySelectorAll('.quiz__item');
  const btn = el.querySelectorAll('.quiz__btn');
  
  btn.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = btn.getAttribute('data-target');
      const quiz = el.querySelector(target);
      items.forEach(item=>{
        item.classList.remove('active');
      })
      quiz.classList.add('active');
      check()
    })
  })

  function check(){ 
    const quiz1 = el.querySelector('#quiz-1'); 
    if(quiz1.classList.contains('active')){ 
      const inputs = el.querySelectorAll('input');
      const input1 = el.querySelector('#astue');
      const input2 = el.querySelector('#askue');
      inputs.forEach(input => {
        input.addEventListener('input', e => {
          if(input1.checked && !input2.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2');
          }if(input2.checked && !input1.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2_askue');
          }if(input1.checked && input2.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2');
          }
        })
      })
    } 
    const quiz3Askue = el.querySelector('#quiz-3_askue'); 
    if(quiz3Askue.classList.contains('active')){ 
      const inputs = el.querySelectorAll('input');
      const input1 = el.querySelector('#more-670');
      const input2 = el.querySelector('#less-670');
      inputs.forEach(input => {
        input.addEventListener('input', e => {
          if(input1.checked && !input2.checked){
            const btn = quiz3Askue.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-5_askue_more-670');
          }if(input2.checked && !input1.checked){
            const btn = quiz3Askue.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-4_askue_more-670');
          }
        })
      })
    } 
    const steps = el.querySelectorAll('.step'); 
    steps.forEach(el=>{
      if(el.classList.contains('active')){ 
        const btn = el.querySelector('.quiz__next');
        const items = el.querySelectorAll('.step__item');
        items.forEach(item => {
          item.addEventListener('click', e => {
            if(!el.querySelector('.step__own').querySelector('input:checked') && item.querySelector('input:checked')){
              const target = item.getAttribute('data-target');
              btn.setAttribute('data-target', target);
              if(el.querySelectorAll('.step__item.active').length > 1){
                btn.setAttribute('data-target', '#quiz__own');
              }
            }
            if(item.classList.contains('step__own') && item.querySelector('input:checked')){
              const target = item.getAttribute('data-target');
              btn.setAttribute('data-target', target);
            }
          })
        })
      } 
    })
  } 

})

document.querySelectorAll('.quiz_2').forEach(function ( el ) {
  const items = el.querySelectorAll('.quiz__item');
  const btn = el.querySelectorAll('.quiz__btn');
  
  btn.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = btn.getAttribute('data-target');
      const quiz = el.querySelector(target);
      items.forEach(item=>{
        item.classList.remove('active');
      })
      quiz.classList.add('active');
      check()
    })
  })

  function check(){ 
    const quiz1 = el.querySelector('#quiz-1_2'); 
    if(quiz1.classList.contains('active')){ 
      const inputs = el.querySelectorAll('input');
      const input1 = el.querySelector('#astue_2');
      const input2 = el.querySelector('#askue_2');
      inputs.forEach(input => {
        input.addEventListener('input', e => {
          if(input1.checked && !input2.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2_2');
          }if(input2.checked && !input1.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2_askue_2');
          }if(input1.checked && input2.checked){
            const btn = quiz1.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-2_2');
          }
        })
      })
    } 
    const quiz3Askue = el.querySelector('#quiz-3_askue_2'); 
    if(quiz3Askue.classList.contains('active')){ 
      const inputs = el.querySelectorAll('input');
      const input1 = el.querySelector('#more-670_2');
      const input2 = el.querySelector('#less-670_2');
      inputs.forEach(input => {
        input.addEventListener('input', e => {
          if(input1.checked && !input2.checked){
            const btn = quiz3Askue.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-5_askue_more-670_2');
          }if(input2.checked && !input1.checked){
            const btn = quiz3Askue.querySelector('.quiz__next');
            btn.setAttribute('data-target', '#quiz-4_askue_more-670_2');
          }
        })
      })
    } 
    const steps = el.querySelectorAll('.step'); 
    steps.forEach(el=>{
      if(el.classList.contains('active')){ 
        const btn = el.querySelector('.quiz__next');
        const items = el.querySelectorAll('.step__item');
        items.forEach(item => {
          item.addEventListener('click', e => {
            if(!el.querySelector('.step__own').querySelector('input:checked') && item.querySelector('input:checked')){
              const target = item.getAttribute('data-target');
              btn.setAttribute('data-target', target);
              if(el.querySelectorAll('.step__item.active').length > 1){
                btn.setAttribute('data-target', '#quiz__own');
              }
            }
            if(item.classList.contains('step__own') && item.querySelector('input:checked')){
              const target = item.getAttribute('data-target');
              btn.setAttribute('data-target', target);
            }
          })
        })
      } 
    })
  } 

})