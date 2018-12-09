var prjctImg = document.getElementsByClassName('prjctImg');
var arrowDown = document.getElementById('arrowDown');
var arrowUp = document.getElementById('arrowUp');
var closeIcon = document.getElementById('close');
var arrowRight = document.getElementById('arrowRight');
var icon = document.getElementsByClassName('icon');
var scrollBar = document.getElementById('scroll');
var height = 21;
var clicked = 0;

function nextImg() {
    if (clicked >= prjctImg.length) {
       
        clicked = prjctImg.length - 1;
        prjctImg[clicked].classList.add("activeImg");
    }
    else {
        for (let i = 0; i < prjctImg.length; i++) {
            prjctImg[i].classList.remove("activeImg");
        }
        prjctImg[clicked].classList.add("activeImg");
    }
}
function prevImg() {
    for (let i = 0; i < prjctImg.length; i++) {
        prjctImg[i].classList.remove("activeImg");
    }
    if (clicked < 0) {
        if (height >100) {
            prjctImg[prjctImg.length].classList.add("activeImg");
        }
        clicked = 0;
    }      
        prjctImg[clicked].classList.add("activeImg");
    }

function scrollUp() {
    if (height < 0) {
        height = 0;
    }
    else {
        height -= 15;
    }
    scrollBar.style.height = height + "%";
}
function scrollDown() {
    if (height >= 100) {
        height = 100;
    }
    else {
        height += 15;
    }
    scrollBar.style.height = height + "%";
}

arrowDown.addEventListener('click', function () {
    
   
    clicked++;
    scrollDown();
    nextImg();
});
arrowUp.addEventListener('click', function () {
    clicked--;
    scrollUp();
    prevImg();
});
arrowRight.addEventListener('click', function () {
    icon[0].classList.add('change');
});
closeIcon.addEventListener('click', function () {
    icon[0].classList.remove('change');
});