var mouse = document.querySelector('.cursor');
var textContent = document.querySelector('.textContent');
var mainsection = document.querySelector('.mainsection');
var texts = mainsection.querySelectorAll('div');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}
mainsection.addEventListener('mouseover', function() {
    mouse.style.opacity = 1;
    document.body.style.cursor = 'none';
});
mainsection.addEventListener('mouseout', function() {
    mouse.style.opacity = 0;
    document.body.style.cursor = 'auto';
});

texts.forEach(element => {
    element.addEventListener('mouseover', function() {
        mouse.classList.add('hovered-cursor');
    });
    element.addEventListener('mouseout', function() {
        mouse.classList.remove('hovered-cursor');
    });
});