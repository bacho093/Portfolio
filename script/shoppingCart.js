function changeValue() {
    var minus = document.querySelectorAll('.minus');
    var plus = document.querySelectorAll('.plus');
    var quantity = document.querySelectorAll('.q p');

    for(let i = 0; i < plus.length; i++) {
        let pl = plus[i];
        pl.addEventListener('click', function() {
            let qVal = parseInt(quantity[i].innerHTML);
            qVal++;
            
            quantity[i].classList.remove('active3');
            quantity[i].classList.remove('active4');

            if(quantity[i].classList.contains('active1')) {
                quantity[i].classList.remove('active1');
                quantity[i].classList.add('active2');
            }
            else {
                quantity[i].classList.add('active2');
            }

            setTimeout(() => {
                quantity[i].innerText = qVal;
                quantity[i].classList.remove('active2');
                quantity[i].classList.add('active1');
            }, 300);
        });
    }
    for(let i = 0; i < minus.length; i++) {
        let mn = minus[i];
        mn.addEventListener('click', function() {
            let qVal = parseInt(quantity[i].innerHTML);
            if(qVal <= 1) {
                qVal = 1;
            }
            else {
                qVal--;
            }

            quantity[i].classList.remove('active1');
            quantity[i].classList.remove('active2');
            if(quantity[i].classList.contains('active3')) {
                quantity[i].classList.remove('active3');
                quantity[i].classList.add('active4');
            }
            else {
                quantity[i].classList.add('active4');
            }

            setTimeout(() => {
                quantity[i].innerText = qVal;
                quantity[i].classList.remove('active4');
                quantity[i].classList.add('active3');
            }, 300);
        });
    }
}
changeValue();