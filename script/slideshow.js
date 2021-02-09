// SLIDE 1 
const slides = document.querySelector('.slides').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const ind = document.querySelector('.indicator');
let index = 0;

prev.addEventListener('click', function() {
    prevSlide();
    resetTimer();
});


next.addEventListener('click', function() {
    nextSlide();
    resetTimer();
});

function indicator() {
    for(let i = 0; i < slides.length; i++) {
        var div = document.createElement('div');
            div.setAttribute('onclick', 'indicateSlide(this)');
            div.id = i;
            if(i == 0) {
                div.className = 'active';
            }
        ind.appendChild(div);
    }
}
indicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateIndicator();
    resetTimer();
}

function updateIndicator() {
    for(let i = 0; i < ind.children.length; i++) {
        ind.children[i].classList.remove('active');
    }
        ind.children[index].classList.add('active');
}

function nextSlide() {
    if(index == slides.length - 1) {
        index = 0;
        changeSlide();
    }
    else {
        index++;
    }
    changeSlide();
    updateIndicator();
}


function prevSlide() {
    if(index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
    updateIndicator();
}

function changeSlide() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}
let timer = setInterval(autoPlay, 2000);

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 2000);
}

function autoPlay() {
    nextSlide();
    updateIndicator();
}

// SLIDE 2 
const slides2 = document.querySelector('.slides2');
const sld2 = document.querySelector('.slides2').children;
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
let leftPosition = 0;

prev2.addEventListener('click', function() {
    prev2Slide();
});

next2.addEventListener('click', function() {
    next2Slide();
});

function prev2Slide() {
    var x = slides2.clientWidth;

    if(leftPosition == 0) {
        leftPosition = sld2.length - 1;
        slides2.style.left = (x * leftPosition) * - 1 + 'px';
    }
    else {
        leftPosition--;
        slides2.style.left = (x * leftPosition) * - 1 + 'px';
    }
    resettimer2();
}

function next2Slide() {
    var x = slides2.clientWidth;

    if(leftPosition == sld2.length - 1) {
        leftPosition = 0;
        slides2.style.left = x * leftPosition + 'px';
    }
    else {
        leftPosition++;
        slides2.style.left = (x * leftPosition) * - 1 + 'px';
    }
    resettimer2();
}

function resettimer2() {
    clearInterval(timer2);

    timer2 = setInterval(autoplay2, 2000);
}

function autoplay2 () {
    next2Slide();
}

let timer2 = setInterval(autoplay2, 2000);


// SLIDE 3 
const slides3 = document.querySelector('.slides3').children;
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
let index3 = 0;

prev3.addEventListener('click', function() {
    prevSlide3();
    resetTimer3();
});


next3.addEventListener('click', function() {
    nextSlide3();
    autoPlay3();
    resetTimer3();
});

function nextSlide3() {
    if(index3 == slides3.length - 1) {
        index3 = 0;
        changeSlide3();
    }
    else {
        index3++;
    }
    changeSlide3();
}


function prevSlide3() {
    if(index3 == 0) {
        index3 = slides3.length - 1;
    }
    else {
        index3--;
    }
    changeSlide3();
}

function changeSlide3() {
    for(let i = 0; i < slides3.length; i++) {
        slides3[i].classList.remove('active');
    }
    slides3[index3].classList.add('active');
}
let timer3 = setInterval(autoPlay3, 4000);

function resetTimer3() {
    clearInterval(timer3);
    timer3 = setInterval(autoPlay3, 4000);
}

function autoPlay3() {
    nextSlide3();
}