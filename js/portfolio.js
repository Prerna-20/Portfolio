var progress = document.getElementById('progress');
var counter = document.getElementById('counter');
var intro = document.getElementById('intro');
var workIcon = document.getElementById('workIcon');
var sliderMain = document.getElementById('sliderMain');
var wrap = document.getElementById('wrap');
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
var workInfo = document.getElementById('workInfo');
var footer = document.getElementById('footer');
var toAbout = document.getElementById('toAbout');
var transContainer = document.getElementById('transContainer');
var home = document.getElementById('home');
var screenshot = document.getElementById('screenshot');
var snapsBtn = document.getElementById('snapsBtn');
var slideContainer = document.getElementById('slideContainer');
var slide = document.getElementsByClassName('slides');
var nextSlide = document.getElementById('nextSlide');
var prevSlide = document.getElementById('prevSlide');
var closeSlide = document.getElementById('closeSlide');
var slideNumber = document.getElementById('slideNumber');

var i = 0;
var height = 21;
var clicked = 0;
var ImgTrans = 0;
var titleTrans = 0;
var typeTrans = 0;
var codeTrans = 0;
var initClass = wrap.classList[0];
var slideIndex = 0;
var wrapClasses;
var num;

/********************************************************* FUNCTIONS *********************************************************/

function frame() {
    if (i > 100) {
        clearInterval(i);
        intro.classList.add("slideUp");
        progress.style.height = 0;

    } else {
        counter.innerHTML = i + "%";
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

/********************************************************* ON CLICK EVENT LISTENERS *********************************************************/

/*------------------- SLIDE UP MAIN SCREEN -------------------*/
workIcon.addEventListener('click', function () {
    intro.style.color = "rgb(255,255,255,0.6)";

    sliderMain.classList.add('slideUp');

});
/*------------------- SLIDE IMAGE UP AND DOWN  -------------------*/

arrowDown.addEventListener('click', function () {
    scrollDown();   // All variables modified based on height of scroll
    nextImg();      //Displays content which is transitioned on click
});
arrowUp.addEventListener('click', function () {
    scrollUp();     // All variables modified based on height of scroll
    prevImg();      //Displays content which is transitioned on click
});

/*------------------- SLIDE LEFT TO ABOUT AND CONTACT DETAILS   -------------------*/

toAbout.addEventListener('click', function () {
    wrapClasses = wrap.className.split(" ");
    if (wrapClasses[0] == initClass && wrapClasses.length == 1) {
        wrap.classList.add('slideRight');
    }
    else if (wrapClasses.length > 1) {
        wrap.className = initClass;
        wrap.classList.add('slideRight');
    }
    transContainer.style.transform = "translateY(-" + footer.clientHeight + "px)";
    home.style.width = "63%";
});
toHome.addEventListener('click', function () {

    wrap.classList.add('slideLeft');
    wrap.classList.replace('slideRight', 'slideLeft');
    transContainer.style.transform = "translateY(0)";
    home.style.width = "38%";
});

/*------------------- SLIDE RIGHT TO WORK DETAILS AND VICEVERSA  -------------------*/

arrowRight.addEventListener('click', function () {
    icon.classList.add('change');
    prjctImg[clicked].classList.add('noFilter');
    wrapClasses = wrap.className.split(" ");
    if (wrapClasses[0] == "wrap" && wrapClasses.length == 1) {
        wrap.classList.add('slideLeftImg');
    }
    else if (wrapClasses.length > 1) {
        wrap.className = initClass;
        wrap.classList.add('slideLeftImg');
    }
});

closeIcon.addEventListener('click', function () {
    icon.classList.remove('change');
    prjctImg[clicked].classList.remove('noFilter');
    wrap.classList.add('slideRightImg');
    wrap.classList.replace('slideLeftImg', 'slideRightImg');
});

/*------------------- SLIDESHOW -------------------*/

slideNumber.innerHTML = "1/" + slide.length;
snapsBtn.addEventListener('click', function () {
    slideContainer.classList.add('open');
});
closeSlide.addEventListener('click', function () {
    slideContainer.classList.remove('open');
});

nextSlide.addEventListener('click', function () {
    for (i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
        prevSlide.classList.remove('disable');
    }
    if (slideIndex == slide.length - 1) {
        //Checks for the last slide
        slide[slideIndex].classList.add('active');
    }
    else {
        if (slideIndex == slide.length - 2) {
            nextSlide.classList.add('disable');
        }
        slide[slideIndex].classList.add('slidePrev');
        slide[slideIndex + 1].classList.add('active');
        slideIndex++;
    }
    num = slideIndex + 1;
    slideNumber.innerHTML = num + "/" + slide.length;
});

prevSlide.addEventListener('click', function () {
    for (i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
        nextSlide.classList.remove('disable');
    }
    if (slideIndex == 0) {
        slide[slideIndex].classList.add('active');
    }
    else {
        if (slideIndex == 1) {
            prevSlide.classList.add('disable');
        }
        slideIndex--;
        slide[slideIndex].classList.replace('slidePrev', 'active');
    }
    num = slideIndex + 1;
    slideNumber.innerHTML = num + "/" + slide.length;
});