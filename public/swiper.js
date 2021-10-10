const swiper = new Swiper('.swiper_header', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay:5000,
  },
  
});
console.log(swiper)