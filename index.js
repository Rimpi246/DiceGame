
var randomnumber1=Math.floor(Math.random()*6+1);
document.querySelector("h1").setAttribute("src","dice" + randomnumber1+ ".png");

undefined
var dicenumber1=Math.random()*6+1;
dicenumber1=Math.floor(dicenumber1);
document.querySelector("img.img1").src=("dice" + dicenumber1 + ".png");

var dicenumber2=Math.random()*6+1;
dicenumber2=Math.floor(dicenumber2);
document.querySelector("img.img2").src=("dice" + dicenumber2 + ".png");

if(dicenumber1>dicenumber2){
document.querySelector("h1").innerHTML="🚩 Player 1 wins!";}

if(dicenumber1<dicenumber2){
document.querySelector("h1").innerHTML="Player 2 wins! 🚩";}

if(dicenumber1===dicenumber2){
document.querySelector("h1").innerHTML="🎊 Draw! 🎊";}
