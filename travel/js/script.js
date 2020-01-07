var slides = document.querySelectorAll("#slides .slide");
var currentslide = 0;
var slideInterval = setInterval(nextslide,2500);

function nextslide(){
    slides[currentslide].className ='slide';
    currentslide = (currentslide+1)%slides.length;
    slides[currentslide].className = "slide showing";
}


var slide = document.querySelectorAll("#newslide .box");
var currentslide = 0;
var slideInterval = setInterval(nextslide,2500);

function nextslide(){
    slide[currentslide].className ='box';
    currentslide = (currentslide+1)%slide.length;
    slide[currentslide].className = "box showing";
}


$(document).ready(function(){
    $("#iconubas").click(function(){
        $("header-info").toggle();
    });
});

