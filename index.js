// created random number generator for the six sided dice
var randomNumber1 = Math.floor(Math.random() * 6)+1;
// cycles though image selected upon refresh
var random_diceImage = "dice" + randomNumber1 +".png";
// selectes the source of the dice images
var random_image_source = "images/" + random_diceImage; 
// selects image element from img source 
var image1= document.querySelectorAll('img')[0];
// changes atribute of image to randomize the image in the web page 
image1.setAttribute('src', random_image_source)


var randomNumber2 = Math.floor(Math.random() * 6)+1;
var random_diceImage = "dice" + randomNumber2 +".png";
var random_image_source = "images/" + random_diceImage; 
var image2= document.querySelectorAll('img')[1];
image2.setAttribute('src', random_image_source)

//  created if else statment to select the inner html h1 and change according to winner or loser
if(randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML= "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML= "Player 2 Wins!";
}

else {
    document.querySelector('h1').innerHTML= "Tie Game!";

 
}