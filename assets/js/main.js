function imageSlider(anything){
    document.querySelector('.UpImage').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const menu = document.querySelector('.hamburguer');
const nav_menu = document.querySelector('.header_list')

menu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    nav_menu.classList.toggle('active')
})