let formElement = document.querySelector (".js-form");
let amountElement = document.querySelector (".js-amount");
let currencyElement = document.querySelector (".js-currency");
let resultElement = document.querySelector (".js-result");

let rateEUR = 4.61;
let rateUSD = 3.97;
let rateGBP = 5.42;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;
   
    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
                
        case "GBP":
            result = amount / rateGBP;
            break;    
    }

    resultElement.innerText = `Masz ${result.toFixed(2)} ${currency}`;
})