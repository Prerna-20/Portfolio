var work = document.getElementById('work');
var prjctImg = document.getElementsByClassName('prjctImg');
var arrowDown = document.getElementById('arrowDown');
var arrowUp = document.getElementById('arrowUp');
var closeIcon = document.getElementById('close');
var arrowRight = document.getElementById('arrowRight');
var icon = document.getElementById('icon');
var scrollBar = document.getElementById('scroll');
var imgContainer = document.getElementById('imgContainer');
var workName = document.getElementById('workName');
var workType = document.getElementById('workType');
var workCode = document.getElementById('workCode');
var workList = document.getElementsByClassName('work_list');
var titleContainer = document.getElementById('titleContainer');
var typeContainer = document.getElementById('typeContainer');
var codeContainer = document.getElementById('codeContainer');



var height = 21;
var clicked = 0;
var ImgTrans = 0;
var titleTrans = 0;
var typeTrans = 0;
var codeTrans = 0;



function nextImg() {
    for (let i = 0; i < prjctImg.length; i++) {
        workList[i].style.background = "maroon";
    }
    imgContainer.style.top = "-" + ImgTrans + "%";
    workList[clicked].style.background = "Purple";
    titleContainer.style.transform = "translateY(-" + titleTrans + "px)";
    typeContainer.style.transform = "translateY(-" + typeTrans + "px)";
    codeContainer.style.transform = "translateY(-" + codeTrans + "px)";
}

function prevImg() {
    for (let i = 0; i < prjctImg.length; i++) {
        workList[i].style.background = "maroon";
    }
    imgContainer.style.top = "-" + ImgTrans + "%";
    workList[clicked].style.background = "Purple";
    titleContainer.style.transform = "translateY(-" + titleTrans + "px)";
    typeContainer.style.transform = "translateY(-" + typeTrans + "px)";
    codeContainer.style.transform = "translateY(-" + codeTrans + "px)";
}

function scrollUp() {
    /*  Top Functionality  */
    if (height <= 21) {
        height = 0;
        ImgTrans = 0;
    }
    /*  Bottom Functionality  */
    else if (height >= 100) {
        height = 81;
        clicked = prjctImg.length - 1;
        ImgTrans = 400;
    }
    else {
        height -= 15;
        clicked--;
        ImgTrans -= 100;
        titleTrans -= workName.clientHeight;
        typeTrans -= workType.clientHeight;
        codeTrans -= workCode.clientHeight;
    }
    scrollBar.style.height = height + "%";
}
function scrollDown() {
    /*  Top Functionality  */
    if (height <= 0) {
        height = 21;
        clicked = 0;
    }
    /*  Bottom Functionality  */
    else if (height >= 81) {
        height = 100;
        ImgTrans = 400;
    }
    else {
        height += 15;
        clicked++;
        ImgTrans += 100;
        titleTrans += workName.clientHeight;
        typeTrans += workType.clientHeight;
        codeTrans += workCode.clientHeight;
    }
    scrollBar.style.height = height + "%";
}

arrowDown.addEventListener('click', function () {
    scrollDown();
    nextImg();
});
arrowUp.addEventListener('click', function () {
    scrollUp();
    prevImg();
});
arrowRight.addEventListener('click', function () {
    icon.classList.add('change');
    wrap.classList.add('slideLeftImg');
    wrap.classList.remove('slideRightImg');

});
closeIcon.addEventListener('click', function () {
    icon.classList.remove('change');
    wrap.classList.add('slideRightImg');
    wrap.classList.remove('slideLeftImg');

});

var footer = document.getElementById('footer');
var toAbout = document.getElementById('toAbout');
var transContainer = document.getElementById('transContainer');

var home = document.getElementById('home');
var screenshot = document.getElementById('screenshot');
var wrap = document.getElementById('wrap');
toAbout.addEventListener('click', function () {
    console.log("toAbout");
    wrap.classList.add('slideRight');
    wrap.classList.remove('slideLeft');
    transContainer.style.transform = "translateY(-" + footer.clientHeight + "px)";
    home.style.width = "63%";
});
toHome.addEventListener('click', function () {
    console.log("toAbout");
    wrap.classList.add('slideLeft');
    wrap.classList.remove('slideRight');
    transContainer.style.transform = "translateY(0)";
    home.style.width = "38%";
});
/*
arrowRight.addEventListener('click', function () {
    console.log("toAbout");
    wrap.classList.add('slideRight');
    wrap.classList.remove('slideLeft');
    
    home.style.width = "63%";
});
close.addEventListener('click', function () {
    console.log("toAbout");
    wrap.classList.remove('slideLeft');
    wrap.classList.add('slideRight');
    transContainer.style.transform = "translateY(0)";
    home.style.width = "38%";
});*/