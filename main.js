var slide = document.getElementsByClassName("slide");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var i = 0;

var slideFirst = function(n) {
    slide[n].classList.add("shown"); 
}

var check = function(n) {
    if (n == 0) {
        prev.classList.add("hidden");
    }
    else {
        prev.classList.remove("hidden");
    };
    if (n == slide.length - 1) {
        next.classList.add("hidden");
    }
    else {
        next.classList.remove("hidden");
    }
}

var slideNext = function(n) {
    n++;
    slide[n].classList.add("shown");
    i = n;
}

var slidePrev = function(n) {
    n--;
    slide[n].classList.add("shown");
    i = n;    
}

slideFirst(i);

check(i);

next.addEventListener("click", function(event) {
    event.preventDefault();
    for(var n = 0; n < slide.length-1; n++) {
        slide[n].classList.remove("shown"); 
    }
    slideNext(i);
    check(i);
})

prev.addEventListener("click", function(event) {
    event.preventDefault();
    for(var n = slide.length-1; n > 0; n--) {
        slide[n].classList.remove("shown"); 
    }
    slidePrev(i);
    check(i);
})




