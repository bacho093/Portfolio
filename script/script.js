const daynight = document.querySelector('.daynight');
var main = document.querySelector('.main');
var logo = document.querySelector('.logo');

var rect = logo.getBoundingClientRect();
var positionX = rect.left;


function textEffect() {
    const textAnimation = document.querySelector('.text-animation');

    document.querySelector('.text-animation h2').innerHTML = document.querySelector('.text-animation h2').textContent.replace(/./g, "<span>$&</span>");
    let spans = document.querySelectorAll('.text-animation span');
    for(let i = 0; i < spans.length; i++) {
        let left = innerWidth * Math.random();
        let top = innerHeight * Math.random();

        if(Math.random() < 0.5) {
            spans[i].style.left = "-0" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }

        if(Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
}
textEffect();

daynight.addEventListener('click', function() {
    var mainDiv = main.querySelectorAll('div');
    var circle = main.querySelector('.circlediv');
    var logo = document.querySelector('.logo a');
    var li = document.querySelectorAll('.navClass');
    var dn = document.querySelector('.daynight');
    var contact = document.querySelector('.contact');
    var maintoptxt = document.querySelectorAll('.maintoptxt p');
    var mainsecondtxt = document.querySelector('.mainsecondtxt');
    var box = document.querySelector('.box');
    var more = document.querySelector('.more');

    daynight.classList.toggle('active');

    if(daynight.classList.contains('active')) {
        document.body.style.background = '#8fc3b7';
        logo.style.color = '#74742d';
        main.children[0].style.background = '#000';
        main.children[0].style.boxShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        main.children[2].style.background = '#000';
        main.children[2].style.boxShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        mainDiv[1].style.background = '#8fc3b7';
        mainDiv.forEach(element => {
            element.style.color = '#000';
            element.style.textShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        });
        circle.classList.add('active');

        dn.style.border = '1px solid #716334';
        li.forEach(element => {
            element.style.color = '#000';
        });
        contact.style.border = '1px solid #2a3533c2';
        contact.style.background = '#8fc3b7';
        contact.addEventListener('mouseover', function() {
            contact.style.border = '1px solid #2a3533c2';
            contact.style.color = '#fff';
            contact.style.background = '#2a3533c2';
        });
        contact.addEventListener('mouseout', function() {
            contact.style.color = '#000';
            contact.style.background = '#8fc3b7';
        });
        maintoptxt.forEach(item => {
            item.style.color = '#000';
            item.style.textShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        });
        mainsecondtxt.style.color = '#2a3533';
        mainsecondtxt.style.textShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        box.style.border = '3px solid #ccc';
        box.style.boxShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        more.children[0].style.color = '#000';
        more.children[0].style.textShadow = '5px 5px 10px rgba(70,70,70,0.5)';
        more.children[0].children[0].style.border = '1px solid rgb(0 0 0 / 38%)';
        more.children[0].children[0].style.color = '#D5C292';
    }
    else {
        document.body.style.background = '#29292b';
        logo.style.color = '#D5C292';
        main.children[0].style.background = '#dadadad8';
        main.children[0].style.boxShadow = 'unset';
        main.children[2].style.background = '#dadadad8';
        main.children[2].style.boxShadow = 'unset';
        mainDiv[1].style.background = '#29292b';
        mainDiv.forEach(element => {
            element.style.color = '#dadadad8';
            element.style.textShadow = 'unset';
        });
        circle.classList.remove('active');

        dn.style.border = '1px solid #dadadaa6';
        li.forEach(element => {
            element.style.color = '#dadada';
        });
        contact.style.background = '#29292b';
        contact.style.border = '1px solid #b3a27afa';
        contact.style.color = '#eeeef0';
        contact.addEventListener('mouseover', function() {
            contact.style.background = '#b3a27afa';
            contact.style.border = '1px solid #b3a27afa';
        });
        contact.addEventListener('mouseout', function() {
            contact.style.background = '#29292b';
            contact.style.color = '#eeeef0';
        });
        for(let i = 0; i < maintoptxt.length; i++) {
            maintoptxt[0].style.color = '#9b9a9ad8';
            maintoptxt[1].style.color = '#8b8a8abd';
            maintoptxt[0].style.textShadow = 'unset';
            maintoptxt[1].style.textShadow = 'unset';
        }
        mainsecondtxt.style.color = '#D5C292';
        mainsecondtxt.style.textShadow = 'unset';
        box.style.border = '3px solid #D5C292';
        box.style.boxShadow = 'unset';
        more.children[0].style.color = '#9b9a9ad8';
        more.children[0].style.textShadow = 'unset';
        more.children[0].children[0].style.border = '1px solid #d5c2924f';
        more.children[0].children[0].style.color = '#a7a172';
    }
});
// color: #222220b7;
// text-shadow: 5px 5px 10px rgba(70,70,70,0.5);