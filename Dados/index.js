var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".container .dice .img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "<h1>Draw!</h1>";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "<h1>Player 2 Wins!</h1>";
}
else {
  document.querySelector("h1").innerHTML = "<h1>Player 1 Wins!</h1>";
}
