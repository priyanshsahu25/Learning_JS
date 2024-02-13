

const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const dropdowns=document.querySelectorAll(".dropdown select");
for (let select of dropdowns){
   
    for (currency in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currency;
        newOption.value=currency;
        if(select.name==="from" && currency ==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to" && currency ==="INR"){
            newOption.selected="INR";
        }
        select.append(newOption);
        select.addEventListener('click',(evt)=>{
            updatefalg(evt.target);
        });
    }
   

}
const updatefalg=(element)=>{
console.log(element);
}



















// const URL="https://v6.exchangerate-api.com/v6/ca1cbb471eb700f4fc3fdd72/latest/USD";
// const func = async ()=>{
//     let response =await fetch(URL);
//     let data=await response.json();
//     console.log(data);
//     console.log(data.conversion_rates.INR);
// }






// const URL="https://cat-fact.herokuapp.com/facts";
// const btn= document.querySelector('.btn');
// const facts= document.querySelectorAll('.facts');

// const func= async ()=>{
//     let response= await fetch(URL);
//     console.log(response.status);
//     let data= await response.json();
//     let i=0;
//     for(let x of facts){
//         x.innerText=data[i].text;
//         i++;
//     }
// }

// btn.addEventListener("click",func);