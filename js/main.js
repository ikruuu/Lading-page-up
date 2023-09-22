function imageSlider(anything){
    document.querySelector('.img__content').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
    const starbucks = document.querySelector('.starbucks');
    starbucks.style.color = color;
    const learn__more = document.querySelector('.learn__more');
    learn__more.style.background = color;
    const nav = document.querySelector('.nav');
    nav.style.background = color;
    const mobile_menu = document.querySelector('.nav__list');
    mobile_menu.style.background = color;
}
const menu = document.querySelector('.mobile_menu');
const list = document.querySelector('.nav__list');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
menu.addEventListener('click', () =>{
    list.classList.toggle('active')
    line1.classList.toggle('active')
    line2.classList.toggle('active')
    line3.classList.toggle('active')
})