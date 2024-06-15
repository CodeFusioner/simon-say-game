let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
    
});

function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let rndIdx = Math.floor(Math.random()*3);
    let rndClr = btns[rndIdx];
    let rndbtn = document.querySelector(`.${rndClr}`);
    gameseq.push(rndClr);
    console.log(gameseq);

    gameflash(rndbtn);
}

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}