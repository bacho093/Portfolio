const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', function() {
    burger.classList.toggle('toggle');
    navigation.classList.toggle('active');
});