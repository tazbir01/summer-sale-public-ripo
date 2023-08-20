document.getElementById('kitchen-card').addEventListener('click', function(){
    const priceTextElement = document.getElementById('kitchen-price');
    const priceTextString = priceTextElement.innerText;
    const priceText = parseFloat(priceTextString);
    const fixtPriceText = priceText.toFixed(2)

    console.log(fixtPriceText)
})