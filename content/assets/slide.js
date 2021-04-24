var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    n = (slideIndex - 1)%slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        if(i==n){
            dots[i].className = dots[i].className.replace("dot", "dot activeDot");
           
        }
        else
            dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    
    
    slides[n].style.display = "block";
    //dots[n].className = dots[n].className + " activeDot";
       console.log("슬라이드 "+n);
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


