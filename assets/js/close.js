var timer;
var time = 0;
var isTrue = false;
var bar = document.getElementById("closer");

$(document).mousedown(function clicked() {
    timer = setInterval(function ho(){holding();}, 1);
    isTrue = true;
    time=0;
});
$(document).mouseup(function released() {
    isTrue = false;
    clearInterval(timer);
    bar.style.height = 0 + '%';
});

function holding() {
    if (isTrue)
        time += 1;
    if(time >100){
        bar.style.width = (time-100)/2 + '%';
    }
    
    if (time > 300) {
        time = 0;
        clearInterval(timer);
        longCl();
    }
    console.log(time);
}

function longCl() {
    bar.style.width = 0 + '%';
    history.back();
}
