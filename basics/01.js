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
    check_winner();
})
});

let announcement= document.createElement('h3');
let body =document.querySelector('body');
const check_winner=()=>{
    for (let winner of winpattern){
        let pos1=boxes[winner[0]].innerText;
        let pos2=boxes[winner[1]].innerText;
        let pos3=boxes[winner[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1 =='0' && pos2 =='0' && pos3 =='0'){
                announcement.innerText='Winner is 0';
                body.append(announcement);
            }
            else if(pos1 =='X' && pos2 =='X' && pos3 =='X'){
                announcement.innerText='Winner is X';
                body.append(announcement);
            }
        }
    }
}

