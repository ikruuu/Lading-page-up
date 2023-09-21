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
    const left__circle2 = document.querySelector('.left__circle2');
    left__circle2.style.background = color;
}
