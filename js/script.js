const priceElement = document.getElementById("inputPrecio");
const commissionElement = document.getElementById("inputComision");
const cuotaElement = document.getElementById("inputCuotas");
const resultElement = document.getElementById("resultContainer");
const result_txtElement = document.getElementById("result-txt");

function calcPricePerMonth()
{   
    const price = Number(priceElement.value);
    const commission = Number(commissionElement.value);
    const cuota = Number(cuotaElement.value);

    if(price <= 0 || cuota <= 0) return;

    let pricePerMonth = price;

    if(commission > 0)
        pricePerMonth = (price * (100 + commission)) / 100;

    pricePerMonth /= cuota;

    result_txtElement.innerText = pricePerMonth.toFixed(2); 
    resultElement.style.display = "block";
}