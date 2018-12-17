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
var detailContainer = document.getElementById('detailContainer');
var snapsBtn = document.getElementsByClassName('snapsBtn');

var slideContainer = document.getElementsByClassName('slideContainer');
var slides = document.getElementsByClassName('slides')[0];
var nextSlide = document.getElementsByClassName('nextSlide');
var prevSlide = document.getElementsByClassName('prevSlide');
var closeSlide = document.getElementsByClassName('closeSlide');
var slideNumber = document.getElementsByClassName('slideNumber');
var allSlides = document.getElementsByClassName('allSlides');

var j = 0;
var height = 21;
var currentImg = 0;
var ImgTrans = 0;
var titleTrans = 0;
var typeTrans = 0;
var codeTrans = 0;
var slideIndex;
var wrapClasses;
const initClass = wrap.classList[0]; //DEFAULT CLASS FOR WRAP DIV
const slideInitClass = slides.classList[0];   //DEFAULT CLASS FOR SLIDES DIV



/********************************************************* FUNCTIONS *********************************************************/

function frame() {
    if (j > 100) {
        clearInterval(j);
        intro.classList.add("slideUp");
        progress.style.height = 0;

    } else {
        counter.innerHTML = j + "%";
        j++;
    }
}
var interval = setInterval(frame, 30);

function slideShow(val) {
    var totalSlides = allSlides[val].childElementCount;
    var slideArray = allSlides[val].children;
    snapsBtn[val].addEventListener('click', function () {
        slideNumber[val].innerHTML = "1/" + totalSlides;
        slideContainer[val].style.top = ImgTrans + "%";
        slideContainer[val].classList.add('open');
        prevSlide[val].classList.add('disable');
        nextSlide[val].classList.remove('disable');
        slideIndex = 0;
    });
    closeSlide[val].addEventListener('click', function () {
        slideContainer[val].classList.remove('open');
        for (let i = 0; i < totalSlides; i++) {
            slideArray[i].className = slideInitClass;
        }
        slideArray[0].classList.add('active');
    });
    nextSlide[val].addEventListener('click', function () {
        for (i = 0; i < totalSlides; i++) {
            slideArray[i].classList.remove('active');
            prevSlide[val].classList.remove('disable');
        }
        if (slideIndex == slideArray.length - 1) {
            //Checks for the last slide
            slideArray[slideIndex].classList.add('active');
        }
        else {
            if (slideIndex == slideArray.length - 2) {
                nextSlide[val].classList.add('disable');
            }
            slideArray[slideIndex].classList.add('slidePrev');
            slideArray[slideIndex + 1].classList.add('active');
        }
        slideIndex++;

        slideNumber[val].innerHTML = slideIndex + 1 + "/" + totalSlides;
    });

    prevSlide[val].addEventListener('click', function () {
        for (i = 0; i < totalSlides; i++) {
            slideArray[i].classList.remove('active');
            nextSlide[val].classList.remove('disable');
        }
        if (slideIndex == 0) {
            slideArray[slideIndex].classList.add('active');
        }
        else {
            if (slideIndex == 1) {
                prevSlide[val].classList.add('disable');
            }
            slideIndex--;
            slideArray[slideIndex].classList.replace('slidePrev', 'active');
        }
        slideNumber[currentImg].innerHTML = slideIndex + 1 + "/" + totalSlides;
    });

}

function nextImg() {
    for (let i = 0; i < prjctImg.length; i++) {
        workList[i].style.background = "maroon";
    }
    imgContainer.style.top = "-" + ImgTrans + "%";
    workList[currentImg].style.background = "Purple";
    titleContainer.style.transform = "translateY(-" + titleTrans + "px)";
    typeContainer.style.transform = "translateY(-" + typeTrans + "px)";
    codeContainer.style.transform = "translateY(-" + codeTrans + "px)";
    detailContainer.style.transform = "translateY(-" + ImgTrans + "%)";
    if (currentImg > 0) {
        slideShow(currentImg);
    }
}

function prevImg() {
    for (let i = 0; i < prjctImg.length; i++) {
        workList[i].style.background = "maroon";
    }
    imgContainer.style.top = "-" + ImgTrans + "%";
    workList[currentImg].style.background = "Purple";
    titleContainer.style.transform = "translateY(-" + titleTrans + "px)";
    typeContainer.style.transform = "translateY(-" + typeTrans + "px)";
    codeContainer.style.transform = "translateY(-" + codeTrans + "px)";
    detailContainer.style.transform = "translateY(-" + ImgTrans + "%)";
    if (currentImg > 0) {
        slideShow(currentImg);
    }
    else {
        slideShow(0);
    }
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
        currentImg = prjctImg.length - 1;
        ImgTrans = 400;
    }
    else {
        height -= 15;
        currentImg--;
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
        currentImg = 0;
    }
    /*  Bottom Functionality  */
    else if (height >= 81) {
        height = 100;
        ImgTrans = 400;
    }
    else {
        height += 15;
        currentImg++;
        ImgTrans += 100;
        titleTrans += workName.clientHeight;
        typeTrans += workType.clientHeight;
        codeTrans += workCode.clientHeight;
    }
    scrollBar.style.height = height + "%";
}

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
    prjctImg[currentImg].classList.add('noFilter');
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
    prjctImg[currentImg].classList.remove('noFilter');
    wrap.classList.add('slideRightImg');
    wrap.classList.replace('slideLeftImg', 'slideRightImg');
    if (slideContainer[currentImg].classList.contains('open')) {
        slideContainer[currentImg].classList.remove('open');
    }
});

/*------------------- SLIDESHOW -------------------*/

slideShow(0);