let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winX=document.querySelector(".X");
let disp=document.querySelector(".mes-cont");
let restart=document.querySelector(".newbtn");
let turnO=true;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const resetG=()=>{
    turnO=true;
    boxenable();
    disp.classList.add("hide");
    
}
const boxdisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const boxenable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
    for(let box of boxes){
        box.innerText="";
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        win();
    });
});

const showWinner=(pos1)=>{
    winX.innerText=`Winner is ${pos1}`;
    disp.classList.remove("hide");
    boxdisable();
}


const win=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("WINNER = ",pos1);
            showWinner(pos1);
        }
    }
}
}

resetbtn.addEventListener("click",()=>{
    resetG();
})
restart.addEventListener("click",()=>{
    resetG();
})