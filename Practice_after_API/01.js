// (async()=>{
//     const URL = await fetch("https://cat-fact.herokuapp.com/facts");
//     let data =await URL.json();
//     for( ele of data){
//         console.log(ele.text);
//     }

// })()



// let data = URL.json();
// console.log(data);


// const URL="https://v6.exchangerate-api.com/v6/ca1cbb471eb700f4fc3fdd72/latest/USD";
// const func = async ()=>{
//     let response =await fetch(URL);
//     let data=await response.json();
//     console.log(data);
//     console.log(data.conversion_rates.INR);
// }




// const func =(data)=>{
//     return new Promise((resolve,request)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("success");
//         },2000);
//     })
    
// }
// (async ()=>{
//     console.log("DATA LOADING......");
//     await func("DATA is 1");
//     console.log("DATA LOADING......");
//     await func("DATA is 2");
//     console.log("ENDED.......");
    
// })()








// let data = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     console.log("hello World");
    //     resolve("success");
    // },2000);
    
 
// })
// data.then((res)=>{
//     console.log("HIIIIIIII",res);
//     return res;
// }).then((res)=>{
//     setTimeout(() => {
//         console.log("Dealyed data ",res);
//     }, 1000);
// });















// const func= (data,nextData) =>{
//     setTimeout(()=>{
//         console.log(data); 
//         if(nextData){
//             nextData();
//         }
        
//     },2000);
    
// }
// func(23,()=>{
//     func(25, ()=>{
//         func(28);
//     });
// });