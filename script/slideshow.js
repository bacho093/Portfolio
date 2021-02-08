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
