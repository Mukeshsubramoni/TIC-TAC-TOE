var boxs=document.querySelectorAll('.box')
var statusTxt=document.querySelector('#status')
var btnrestart=document.querySelector('#restart')
let X="<img src='x.png'>";
let O="<img src='o.png'>";

var win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options=["","","","","","","","",""];
let currentplayer=X;
let player="X"
let running=false;
init();

function init(){
    boxs.forEach(box=>box.addEventListener('click',boxclick));
    running=true;
    btnrestart.addEventListener('click',restartGame);
    statusTxt.textContent=`${player} YOUR TURN`;
    running=true;
}

function boxclick(){
     let index= this.dataset.index;
     if(options[index]!="" || !running){
        return;
     }
     updateBox(this,index);
     checkWinner();


}

function updateBox(box,index){
    options[index]=player;
    box.innerHTML=currentplayer;

}

function changePlayer(){
    player=(player=='X') ? "O" : "X";
    currentplayer=(currentplayer==X) ? O : X ;
    statusTxt.textContent=`${player} YOUR TURN`;
}

function checkWinner(){
    let isWon = false;
    for(let i=0;i<win.length;i++){
        var condition=win[i];
        var box1=options[condition[0]];
        var box2=options[condition[1]];
        var box3=options[condition[2]];
        if(box1=="" || box2=="" || box3=="" ){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon=true;
            boxs[condition[0]].classList.add('win');
            boxs[condition[1]].classList.add('win');
            boxs[condition[2]].classList.add('win');
        }
        }
        

    if(isWon){
        statusTxt.textContent=`${player} WON ...`;
        running=false;
    }else if(!options.includes("")){
        statusTxt.textContent=`GAME DRAW...!`;
        running=false;
    }else{
        changePlayer();
    }}


function restartGame(){
 options=["","","","","","","","",""];
 currentplayer=X;
 player="X"
 running=true;
 statusTxt.textContent=`${player} YOUR TURN`;

 boxs.forEach(boxs=>{
    boxs.innerHTML="";
    boxs.classList.remove('win');
 });
 }