{
    const calculateResult = (amount, currency) =>{

        const rateEUR = 4.60;
        const rateUSD = 3.99;
        const rateGBP = 5.36;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
        
            case "USD":
                return amount / rateUSD;
                    
            case "GBP":
                return amount / rateGBP;
        }
    }
    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector (".js-result");
        resultElement.innerText = `Masz ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector (".js-amount");
        const currencyElement = document.querySelector (".js-currency");
       

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        
        const result = calculateResult (amount, currency);

        updateResultText (result, currency)
    }

    const init = () => {
        const formElement = document.querySelector (".js-form");

        formElement.addEventListener("submit", onFormSubmit);
       
    }

    init();

}