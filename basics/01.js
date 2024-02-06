let boxes= document.querySelectorAll('.btn');
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0=true;
boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    if(turn0==true){
        box.innerText='0';
    }
    else  box.innerText='X';
    turn0=!turn0;
    box.disabled=true;
})
});

for (let winner of winpattern){
    console.log(winner);
}