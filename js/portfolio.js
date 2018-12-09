var progress = document.getElementsByClassName("progress")[0];
var counter = document.getElementById('counter');
var overlay = document.getElementById('overlay');
var intro = document.getElementsByClassName("intro")[0];
var i = 0;
var interval = setInterval(frame , 30);
function frame() {
    if(i>100){
       
        clearInterval(i);
 
     intro.classList.add("slideUp");
       // overlay.style.display="none";

    }else{
        counter.innerHTML= i + "%";
       i++;
       
    }    
  
    }
  
   