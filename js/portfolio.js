
var counter = document.getElementById('counter');
var intro = document.getElementById('intro');
var workIcon = document.getElementById('workIcon');
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

var i = 0;
var height = 21;
var clicked = 0;
var ImgTrans = 0;
var titleTrans = 0;
var typeTrans = 0;
var codeTrans = 0;

function frame() {
    if(i==100){
        clearInterval(i); 
     intro.classList.add("slideUp");

    }else{
        counter.innerHTML= i + "%";
       i++;    
    }    
}

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

var interval = setInterval(frame, 30);
workIcon.addEventListener('click', function () {
    work.classList.add('slideUp');
});
arrowDown.addEventListener('click', function () {
    scrollDown();   // All variables modified based on height of scroll
    nextImg();      //Displays content which is transitioned on click
});
arrowUp.addEventListener('click', function () {
    scrollUp();     // All variables modified based on height of scroll
    prevImg();      //Displays content which is transitioned on click
});
arrowRight.addEventListener('click', function () {
    icon.classList.add('change');
});
closeIcon.addEventListener('click', function () {
    icon.classList.remove('change');
});
  
   