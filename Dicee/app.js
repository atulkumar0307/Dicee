let randomNum1 = Math.floor(Math.random()*6)+1;
let randomNum2 = Math.floor(Math.random()*6)+1;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.setAttribute("src", "images/dice"+ randomNum1 +".png");
img2.setAttribute("src", "images/dice"+ randomNum2 +".png");
// console.log(randomNum1, randomNum2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = ("Player 1 Wins!");
}else if (randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = ("Player 2 Wins!");
}else{
    document.querySelector("h1").innerHTML = ("Draw");
}
