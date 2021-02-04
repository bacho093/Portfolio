const daynight = document.querySelector('.daynight');

daynight.addEventListener('click', function() {
    daynight.classList.toggle('active');

    if(daynight.classList.contains('active')) {
        document.body.style.background = '#ffd';
    }
    else {
        document.body.style.background = '#29292b';
    }
});