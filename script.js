var carts = document.querySelector('.carts');

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready() {
    var removeBtn = document.querySelectorAll('.removeBtn');
    for(let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeItem);
    }
    
    var inpValue = document.querySelectorAll('.inp');
    for(let i = 0; i < inpValue.length; i++) {
        inpValue[i].addEventListener('change', changeTotal);
    }
    updateTotal();
}

function changeTotal(e) {
    var input = e.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function removeItem(e) {
    e.target.parentElement.remove();
    updateTotal();
};

function updateTotal() {
    var total = document.querySelector('.total');
    let tl = 0;

    var cart = carts.children;
    for(let i = 0; i < cart.length; i++) {
        var prc = parseFloat(cart[i].children[0].innerText.replace('$', ''));
        var inpVal = cart[i].children[1].value;
        tl += prc * inpVal;
    }
        tl = Math.round(tl * 100) / 100;
        total.innerText = '$' + tl;
}

// Update Cart List

var addBtn = document.querySelectorAll('.addBtn');
for(let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', updateCartList);
}

function updateCartList(e) {
    var item = e.target.parentElement;
    var itemPrc = item.children[1].innerText;
    var cartDiv = document.createElement('div');
        cartDiv.classList.add('cart');
    var div = document.createElement('div');
        div.classList.add('prc');
        div.innerText = itemPrc;
    var input = document.createElement('input');
        input.type = 'number';
        input.min = 1;
        input.value = 1;
        input.classList.add('inp');
    var button = document.createElement('button');
        button.classList.add('removeBtn');
        button.innerText = 'Remove';
        cartDiv.appendChild(div);
        cartDiv.appendChild(input);
        cartDiv.appendChild(button);
        carts.appendChild(cartDiv);
        ready();
};