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

function addToCart(productName){
    const cardName = document.getElementById('cart');

    const count = cardName.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${productName}`;

    cardName.appendChild(p);
}

function checkPrice(){
    let totalPrice = document.getCardElemtnt('total-price')
    const purchaseButton = getElementById('purchase-btn')
    
    console.log(totalPrice)
}
// cards
document.getElementById('kitchen-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price');
    const newTotalPrice = newPrice(kitchenCardPrice);   
    setTotalPrice('total-price', newTotalPrice)

    addToCart('K. Accessories')
})

document.getElementById('kitchen-card1').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price1');
    const newTotalPrice = newPrice(kitchenCardPrice);
    setTotalPrice('total-price', newTotalPrice);

    addToCart('K. Accessories')
})

document.getElementById('kitchen-card2').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price2');
    const newTotalPrice = newPrice(kitchenCardPrice);
    setTotalPrice('total-price', newTotalPrice);

    addToCart('Home Cooker') 
})

document.getElementById('sports-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);

    addToCart('Sports Back Cap') 
})
document.getElementById('sports-card1').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price1');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);

    addToCart('Full Jersey Set') 
})
document.getElementById('sports-card2').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('sports-price2');
    const newTotalPrice = newPrice(kitchenCardPrice); 
    setTotalPrice('total-price', newTotalPrice);

    addToCart('Sports cates') 
})

