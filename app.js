let gamSeq=[];
let userSeq = [];

let btns = ["blue" , "yellow" , "green" , "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game is Started")
        started = true;

        levelUp();
    }
});

function userFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function btnFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}
 

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gamSeq.push(randColor);
    console.log(gamSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn)
    btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gamSeq[idx]){
        if(userSeq.length === gamSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    }else{
        h2.innerText = `Game Over! Press Any key to Start.`;
        reset();
    }

}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn")
for (btn of allBtn){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gamSeq = [];
    userSeq = [];
    level = 0;
}
