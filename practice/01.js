function hello(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`data is : ${data}`);
            resolve("Sucess");
        },2000)  
    });
};

async function func(){
    console.log("Waiting for the data..........");
    await hello(1);
    console.log("Waiting for the data..........");
    await hello(2);
    console.log("Waiting for the data..........");
    await hello(3);
}

func();

// console.log("fetching data ....");
// function async1 (){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data is : DATA 1");
//         resolve("Sucess");
//     },2000)  
// })
// }


// function async2 (){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data is : DATA 2");
//         resolve("Sucess");
//     },2000)  
// })
// }

// let Prom =async1();
// Prom.then((res)=>{
//     console.log("Data 1 has been received ",res);
//     console.log("fetching data ....");
//     let p2=async2();
//     p2.then(()=>{
//         console.log("Data 2 has been received ",res);
//     })
// })


// // const func=()=>{
//     // return  new Promise((resolve, reject)=>{
//     //         console.log("Promis done");
//     //         resolve("Sucess");
//     // })
// // }
// // let Prom =func();
// // Prom.then((res)=>{
// //     console.log("Promise recived",res);
// // })






// // function getData  (data,getNextData) {
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             console.log(data);
// //             resolve("sucess");
// //             if(getNextData){
// //                 getNextData();
// //             }
// //         },10000);

// //     })
    
// // }

// // getData(2,()=>{
// //     getData(24);
// // });
