// function for card price
function getCardElemtnt(cardId){
    const cardPriceText = document.getElementById(cardId);
    const cardPriceTextString = cardPriceText.innerText;
    const cardPrice = parseFloat(cardPriceTextString);

    return cardPrice;
}
// set total price
function setTotalPrice(elementId, price){
    const totalPrice = document.getElementById(elementId);
    totalPrice.innerText = price;
}
// cards
document.getElementById('kitchen-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price');
    const priviousTotalPrice = getCardElemtnt('total-price');
    const newTotalPrice = priviousTotalPrice + kitchenCardPrice;   
    setTotalPrice('total-price', newTotalPrice)
})

document.getElementById('kitchen-card1').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price1');
    const priviousTotalPrice = getCardElemtnt('total-price');
    const newTotalPrice = priviousTotalPrice + kitchenCardPrice; 
    setTotalPrice('total-price', newTotalPrice);
})