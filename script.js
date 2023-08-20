// function for card price
function getCardElemtnt(cardId){
    const cardPriceText = document.getElementById(cardId);
    const cardPriceTextString = cardPriceText.innerText;
    const cardPrice = parseFloat(cardPriceTextString);

    return cardPrice;
}

function newPrice(cardPrice){
    const priviousTotalPrice = getCardElemtnt('total-price');
    const newTotalPrice = priviousTotalPrice + cardPrice;
    return newTotalPrice;
}
// set total price
function setTotalPrice(elementId, price){
    const totalPrice = document.getElementById(elementId);
    totalPrice.innerText = price;
}

// function setTotal(elementId, price)(

// )

function addToCart(productName){
    const cardName = document.getElementById('cart');

    const count = cardName.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${productName}`;

    cardName.appendChild(p);
}
// for buttons

function getTotalPriceText(elementId){
    const totalPriceElement = document.getElementById(elementId);
    const totalPriceElementString = totalPriceElement.innerText;
    const totalPriceValue = parseFloat(totalPriceElementString.split('.')[0]);
    
    return totalPriceValue;
}

function checkTotalPrice(){
    const purchaseButton = document.getElementById('purchase-btn');
    const totalPrice = getTotalPriceText('total-price');

    if (totalPrice > 0) {
        purchaseButton.removeAttribute('disabled');
    }
}

function checkFinalTotalPrice(){
    const applyButton = document.getElementById('apply-btn');
    const totalPrice = getTotalPriceText('total-price');

    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    }
    
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const couponFeild = document.getElementById('coupon-feild');
    const couponFeildValue = couponFeild.value;

    const discountText = document.getElementById('discount');

    const total = getTotalPriceText('total-price');

    const discount = (total * 20) / 100;
    const priceAfterDiscount = total - discount;


    if(couponFeildValue === 'SELL200'){
        discountText.innerText = discount;
        setTotalPrice('total', priceAfterDiscount)
    }
    else{
        alert('Please Enter Your Coupon')
    }
})

// cards
document.getElementById('kitchen-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price');
    const newTotalPrice = newPrice(kitchenCardPrice);   
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);

    addToCart('K. Accessories')

    checkTotalPrice()
    checkFinalTotalPrice()
})

document.getElementById('kitchen-card1').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price1');
    const newTotalPrice = newPrice(kitchenCardPrice);
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);
    
    addToCart('K. Accessories')

    checkTotalPrice()
    checkFinalTotalPrice()
})

document.getElementById('kitchen-card2').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price2');
    const newTotalPrice = newPrice(kitchenCardPrice);
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);

    addToCart('Home Cooker') 

    checkTotalPrice()
    checkFinalTotalPrice()
})

document.getElementById('sports-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);

    addToCart('Sports Back Cap') 

    checkTotalPrice()
    checkFinalTotalPrice()
})

document.getElementById('sports-card1').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price1');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);

    addToCart('Full Jersey Set') 

    checkTotalPrice()
    checkFinalTotalPrice()
})

document.getElementById('sports-card2').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price2');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);
    setTotalPrice('total', newTotalPrice);

    addToCart('Sports cates') 

    checkTotalPrice()
    checkFinalTotalPrice()
})

