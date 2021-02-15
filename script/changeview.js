const daynight = document.querySelector('.daynight');

var logo = document.querySelector('.logo');

var logoA = document.querySelector('.logo a');

var li = document.querySelectorAll('.navClass');

var dn = document.querySelector('.daynight');

var contact = document.querySelector('.contact');

var backbtn = document.querySelectorAll('.backbtn');

var profileContainer = document.querySelector('.profileContainer');

var profileBox = document.querySelector('.profileContainer .container-large .row > div');

var ContactContainer = document.querySelector('.ContactContainer');

var contactBox = document.querySelector('.ContactContainer .container-large .row > div');

var sidebarList = document.querySelectorAll('.sidebar ul li');


function updatePage() {
    if(daynight.classList.contains('active')) {
        document.body.style.background = '#8fc3b7';
        logoA.style.color = '#74742d';

        dn.style.border = '1px solid #716334';
        li.forEach(element => {
            element.style.color = '#000';
            element.style.textShadow = '5px 5px 10px rgba(70,70,70,0.5)';
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
        profileBox.style.background = 'linear-gradient(to right, #364748, #262a33)';
        profileBox.style.boxShadow = 'rgb(47 58 62) -5px 0px 5px';
        contactBox.style.background = 'linear-gradient(to right, #364748, #262a33)';
        contactBox.style.boxShadow = 'rgb(47 58 62) -5px 0px 5px';
        sidebarList.forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        document.body.style.background = '#282e34';
        logoA.style.color = '#D5C292';
        dn.style.border = '1px solid #dadadaa6';
        li.forEach(element => {
            element.style.color = '#dadada';
            element.style.textShadow = 'unset';
        });
        contact.style.background = '#282e34';
        contact.style.border = '1px solid #b3a27afa';
        contact.style.color = '#eeeef0';
        contact.addEventListener('mouseover', function() {
            contact.style.background = '#b3a27afa';
            contact.style.border = '1px solid #b3a27afa';
        });
        contact.addEventListener('mouseout', function() {
            contact.style.background = '#282e34';
            contact.style.color = '#eeeef0';
        });
        profileBox.style.background = 'linear-gradient(to right, #191e24, #262a33)';
        profileBox.style.boxShadow = 'unset';
        contactBox.style.background = 'linear-gradient(to right, #191e24, #262a33)';
        contactBox.style.boxShadow = 'unset';
        sidebarList.forEach(element => {
            element.classList.remove('active');
        });
    }
}

daynight.addEventListener('click', function() {
    daynight.classList.toggle('active');

    if(localStorage.getItem('updatepage') === null) {
        localStorage.setItem('updatepage', 'updated');
    }
    else {
        localStorage.removeItem('updatepage');
    }
    
    updatePage();
});

function pageview() {
    if(localStorage.getItem('updatepage') === 'updated') {
        daynight.classList.add('active');
        updatePage();
    }
}
pageview();

// Profile Page 
let testi = 0;

    document.querySelector('.about').addEventListener('click', function() {
            profileContainer.classList.add('active');
            document.title = 'Portfolio | About';
    });
//

// Contact Page 
document.querySelector('.contact').addEventListener('click', function() {
    ContactContainer.classList.add('active');
    document.title = 'Portfolio | Contact';
});
//

// Close Pages 
backbtn.forEach(element => {
    element.addEventListener('click', function() {
        profileContainer.classList.remove('active');
        ContactContainer.classList.remove('active');
        document.title = 'Portfolio | Bacho';
    }); 
});
// 