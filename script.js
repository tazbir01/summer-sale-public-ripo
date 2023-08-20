// function for card price
function getCardElemtnt(cardId){
    const cardPriceText = document.getElementById(cardId);
    const cardPriceTextString = cardPriceText.innerText;
    const cardPrice = parseFloat(cardPriceTextString);

    return cardPrice;
}

document.getElementById('kitchen-card').addEventListener('click', function(){
    const kitchenCardPrice = getCardElemtnt('kitchen-price');
    console.log(kitchenCardPrice)
})