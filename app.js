const baseUrl = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

const selector = document.querySelectorAll(".selector");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".from select");

for (let select of selector){
    for( currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name==="from" && currCode==="USD"){
            newOption.selected = "selected";
        }else if (select.name==="to" && currCode==="BDT"){
            newOption.selected = "selected";
        }
        select.append(newOption);
        
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });

}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
    
}

btn.addEventListener("click" , async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal==="" || amountVal<1){
        amountVal = 1;
        amount.valur="1";
    }

    const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data [toCurr.value.toLowerCase()];

    let finalAmount = amountVal * rate;
    Msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} `


})