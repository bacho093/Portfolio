var minus = document.querySelectorAll('.minus');
var plus = document.querySelectorAll('.plus');
var quantity = document.querySelectorAll('.q p');

function plusCount(e) {
    var p = e.target.parentElement.parentElement.children[1].children[0];
    var pVal = p.innerText;
    p.classList.remove('active3');
    p.classList.remove('active4');
    p.classList.add('active2');
    setTimeout(() => {
        p.classList.remove('active2');
        p.classList.add('active1');
        pVal++;
        p.innerText = pVal;
        updateTotal();
    }, 300);
}

function minusCount(e) {
    var p = e.target.parentElement.parentElement.children[1].children[0];
    var pVal = p.innerText;
    p.classList.remove('active1');
    p.classList.remove('active2');
    p.classList.add('active4');
    setTimeout(() => {
        p.classList.remove('active4');
        p.classList.add('active3');
        if(pVal <= 1) {
            pVal = 1;
        }
        else {
            pVal--;
        }
        p.innerText = pVal;
        updateTotal();
    }, 300);
}

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready(){
    // REMOVE ITEM 
    var trashBtn = document.querySelectorAll('.trashBtn');
    for(let i = 0; i < trashBtn.length; i++) {
        trashBtn[i].addEventListener('click', removeItem);
    }
    // CHANGE VALUE 
    for(let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', plusCount);
    }
    for(let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', minusCount);
    }
    itemsCount();
}

// ORDER SUMMARY 
function itemsCount() {
    var itemsCount = document.querySelector('.itemsCount div p span');
    var cartrow = document.querySelectorAll('.productList .row');
    var itemstotal = document.querySelector('.itemsCount').children[1];
    // ITEMS * 
    itemsCount.innerText = cartrow.length;
    document.querySelector('.accordion-button span').innerText = cartrow.length;
    // TOTAL 
    let arr = [];

    for(let i = 0; i < cartrow.length; i++) {
        var totals = parseFloat(cartrow[i].children[3].innerText.replace('$', ''));
        arr.push(totals);
    }
    
    if(cartrow.length == 0 || cartrow.length == null) {
        itemstotal.innerText = '$' + 0;
    }
    else {
        itemstotal.innerText = '$' + arr.reduce(sum);
    }
    function sum(total, num) {
        return total + num;
    }

    // TOTAL COST 
    var totalcost = document.querySelector('.totalcost').children[1];
    var shipping = parseFloat(document.querySelector('.shipping').children[1].innerText.replace('$', ''));

    var tl = parseFloat(itemstotal.innerText.replace('$', ''));
    if(tl == 0) {
        totalcost.innerText = '$' + 0;
        document.querySelector('.shipping').children[1].innerText = '$' + 0;
    }
    else {
        document.querySelector('.shipping').children[1].innerText = '$' + 5;
        totalcost.innerText = '$' + ( shipping + tl);
    }
}

function removeItem(e) {
    var cartlistitem = e.target.parentElement.parentElement.parentElement.parentElement;
    cartlistitem.remove();

    updateTotal();
}

function updateTotal() {
    var total = document.querySelectorAll('.total');
    var cartrow = document.querySelectorAll('.productList .row');
    let tl = 0;
    for(let i = 0; i < cartrow.length; i++) {
        var total = cartrow[i].children[3];
        var quantity = cartrow[i].children[1].innerText;
        var price = parseFloat(cartrow[i].children[2].innerText.replace('$', ''));
        tl = quantity * price;
        total.innerText = '$' + tl;
    }
    itemsCount();
}
updateTotal();

