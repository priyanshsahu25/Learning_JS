let boxes= document.querySelectorAll('.btn');
let turn =document.querySelector('#turn');
let announcement= document.createElement('h3');
announcement.setAttribute('id','winner_anoncement');
let body =document.querySelector('body');
let reset_btn= document.querySelector('.reset');
let turn0=true;
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



const match_tied = () => {
    let totalMoves = 0;
    for (let box of boxes) {
        if (box.innerText !== '') {
            totalMoves++;
        }
    }
   
    if (totalMoves === 9) {
        console.log('The game is drawn.');
    }
}






boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    if(turn0==true){
        box.innerText='0';
        turn.innerText='Turn of X';
       
    }
    else  {
        box.innerText='X';
        turn.innerText='Turn of 0';
      
    }
    turn0=!turn0;
    box.disabled=true;
    check_winner();
    match_tied();
})
});





const disable_boxes=()=>{
    for(let box of boxes) box.disabled=true;
}



const check_winner=()=>{
    for (let winner of winpattern){
        let pos1=boxes[winner[0]].innerText;
        let pos2=boxes[winner[1]].innerText;
        let pos3=boxes[winner[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1 =='0' && pos2 =='0' && pos3 =='0'){
                announcement.innerText='Winner is 0';
                body.prepend(announcement);
                turn.remove();
                disable_boxes();
                reset_btn.style.marginTop='20px';
            }
            else if(pos1 =='X' && pos2 =='X' && pos3 =='X'){
                announcement.innerText='Winner is X';
                body.prepend(announcement);
                turn.remove();
                disable_boxes();
                reset_btn.style.marginTop='20px';
            }
        }
    }
}



reset_btn.addEventListener('click',()=>{
for(let box of boxes){
    box.innerText='';
    box.disabled = false;
    turn.innerText='Turn of 0';
    announcement.remove();
}
});