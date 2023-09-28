function imageSlider(anything){
    document.querySelector('.UpImage').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}



function Animation(){
  const link = document.querySelector('.a')
  const menu = document.querySelector('.hamburguer');
  const nav_menu = document.querySelector('.header_list')
  menu.classList.toggle('active');
  nav_menu.classList.toggle('active')
  link.classList.toggle('active')
}

// Swiper 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });