"use strict"
let again=document.querySelector(".again");
let number=document.querySelector(".number");
let message=document.querySelector(".message");
let check=document.querySelector(".check");
let guess=document.querySelector(".guess");
let score=document.querySelector(".score");
let highscore=document.querySelector(".highscore");
let body=document.querySelector("body");


let generateSecNum=function()
{
    let secretNumber=Math.random();
    secretNumber=secretNumber*20+1;
    secretNumber=Math.floor(secretNumber);
    console.log(secretNumber);
    return secretNumber;
};
let highscorevalue=0;
let scorevalue=20;
let secretNumber=generateSecNum();

check.addEventListener("click",
function(event)
{
    let guessNum=Number.parseInt(guess.value) * 1;
    //check guess matches with seret number
    if(guessNum===secretNumber)
    {
        console.log(guessNum);
        //body --> green
        body.style.backgroundColor="green";
        //.?=secnum
         number.textContent=secretNumber;
        //high evalution
        if(highscorevalue<scorevalue)
        {
            highscorevalue=scorevalue;
            highscore.textContent=highscorevalue;
        }
        //score
        message.textContent='Correct Number!!';
    }
    else if(guessNum<secretNumber)
    {
        message.textContent='To low..';
        scorevalue--;
        score.textContent=scorevalue;
    }
    else 
    {
        message.textContent='To high...';
        scorevalue--;
        score.textContent=scorevalue;
    }
}
);
again.addEventListener("click",
function(event)
{
    secretNumber=generateSecNum();
    body.style.backgroundColor="black";
    message.textContent="start guessing";
    number.textContent="?";
    score.textContent="20";
    scorevalue=20;
    guess.value='0';
}
);