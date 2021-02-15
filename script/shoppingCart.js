var minus = document.querySelectorAll('.minus');
var plus = document.querySelectorAll('.plus');
var QBOX = document.querySelectorAll('.QBOX');
var product = document.querySelector('.product');
var productList = product.querySelectorAll('.productList');
var addbtn = document.querySelectorAll('.addBtn');


if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
}
else {
    ready();
}

function ready() {
    changeValue();
    countTotal();
    for (let i = 0; i < addbtn.length; i++) {
        addbtn[i].addEventListener('click', addToCart);
    }
    getLocalStorage();
    removeItem();
}

function changeValue() {
    var productChilds = product.children;
    for(let i = 0; i < productChilds.length; i++) {
        var plus = productChilds[i].children[0].children[1].children[2].children[0];
        plus.addEventListener('click', plusQ);
    }
    for(let i = 0; i < productChilds.length; i++) {
        var minus = productChilds[i].children[0].children[1].children[0].children[0];
        minus.addEventListener('click', minusQ);
    }
}


function plusQ(e) {
    let qty = e.target.parentElement.parentElement.children[1].children[0];
    let qVal = parseInt(qty.innerHTML);
    qVal++;
    qty.classList.remove('active3');
    qty.classList.remove('active4');

    if(qty.classList.contains('active1')) {
        qty.classList.remove('active1');
        qty.classList.add('active2');
    }
    else {
        qty.classList.add('active2');
    }
    qty.innerText = qVal;

    setTimeout(() => {
        qty.classList.remove('active2');
        qty.classList.add('active1');
    }, 300);

    countTotal();

}

function minusQ(e) {
    let qty = e.target.parentElement.parentElement.children[1].children[0];
    let qVal = parseInt(qty.innerHTML);
    if(qVal <= 1) {
        qVal = 1;
    }
    else {
        qVal--;
    }

    qty.classList.remove('active1');
    qty.classList.remove('active2');
    if(qty.classList.contains('active3')) {
        qty.classList.remove('active3');
        qty.classList.add('active4');
    }
    else {
        qty.classList.add('active4');
    }
    qty.innerText = qVal;

    setTimeout(() => {
        qty.classList.remove('active4');
        qty.classList.add('active3');
    }, 300);

    countTotal();
}

function removeItem() {
    let cart;

    if(localStorage.getItem('cart') === null) {
        cart = [];
    }
    else {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    var remove = document.querySelectorAll('.trashBtn');
    for(let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function() {
            var trashItem = remove[i].parentElement.parentElement.parentElement.parentElement;
            var index = trashItem.children[0].children[0].id;
            trashItem.remove();
            // get index of object with id
            var removeIndex = cart.map(function(item) { return item.id; }).indexOf(index);

            // remove object
            cart.splice(removeIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            countTotal();
        });
    }
}


function countTotal() {
    var productChilds = product.children;
    
    let itemstotal = 0;
    var itemsCount = document.querySelector('.itemsCount .sum');
    var shipping = parseFloat(document.querySelector('.shipping .sum').innerText.replace('$', ''));
    var totalCost = document.querySelector('.totalcost .sum');
    document.querySelector('.itemsCount div p span').innerHTML = productChilds.length;
    document.querySelector('.accordion-button span').innerHTML = productChilds.length;

    for(let i = 0; i < productChilds.length; i++) {
            let total = productChilds[i].children[0].children[3].children[0];
            let quantity = parseFloat(productChilds[i].children[0].children[1].children[1].innerText);
            let price = parseFloat(productChilds[i].children[0].children[2].children[0].innerText.replace('$', ''));
            var sum = quantity * price;
            sum = Math.round(sum * 100) / 100;
            productChilds[i].children[0].children[3].children[0].innerHTML = '$' + sum;   

            let values = parseFloat(total.innerText.replace('$', ''));
            itemstotal += values;
            itemsCount.innerHTML = '$' + itemstotal;  


            totalCost.innerText = '$' + (itemstotal + shipping);     
    }  
    if(productChilds.length <= 0) {
        itemsCount.innerHTML = '$' + 0;
        totalCost.innerHTML = '$' + 0;
    }
}


function cartItemStyle(id, title, cat, prc, img) {
    var productList = document.createElement('div');
        productList.className = 'productList';
    var style = 
        `<div class="row">
            <div class="col-md-3 py-3 d-flex align-items-center"  id='${id}'>
                <div class="img">
                    <img src="${img}" alt="Product Image" class='img-fluid'>
                </div>
                <div class="content">
                    <h6 class="title">${title}</h6>
                    <p class="cat"><code>${cat}</code></p>
                    <button class="trashBtn btn outline-0 border-0 text-muted px-0">Remove</button>
                </div>
            </div>
            <div class="QBOX col-md-3 py-3 ps-4 d-flex justify-content-center">
                <div class="minus">
                    <i class="fas fa-minus"></i>
                </div>
                <div class="q mx-2">
                    <p>1</p>
                </div>
                <div class="plus">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <div class="col-md-3 py-3 text-center">
                <div class="price">${prc}</div>
            </div>
            <div class="col-md-3 text-center py-3">
                <div class="total">$0</div>
            </div>
        </div>`;

        productList.innerHTML = style;
        product.appendChild(productList);
}
function addToCart(e) {
    id = e.target.parentElement.parentElement.id;
    title = e.target.parentElement.children[0].innerText;
    cat = e.target.parentElement.children[1].innerText;
    prc = e.target.parentElement.children[2].innerText
    id = e.target.parentElement.parentElement.id;
    img = e.target.parentElement.parentElement.children[0].children[0].src;
    cartItemStyle(id, title, cat, prc, img);
    countTotal();
    changeValue();
    saveToLocalStorage();
    removeItem();
}


function saveToLocalStorage() {
    let cart;

    if(localStorage.getItem('cart') === null) {
        cart = [];
    }
    else {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    var obj = {id, title, cat, prc, img};
    cart.push(obj);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getLocalStorage() {
    let cart;

    if(localStorage.getItem('cart') === null) {
        cart = [];
    }
    else {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.forEach(element => {
        id = element.id;
        title = element.title;
        cat = element.cat;
        prc = element.prc;
        img = element.img;
        cartItemStyle(id, title, cat, prc, img);
    });
    countTotal();
    changeValue();
}