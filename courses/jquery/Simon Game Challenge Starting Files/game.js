let gamePattern = []
const buttonColours = ["red", "blue", "green", "yellow"]
const randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0)

let randomChosenColour = buttonColours[randomNumber]

gamePattern = randomChosenColour;

console.log(gamePattern)

$('#' + gamePattern).fadeOut(100).fadeIn(100);



// Add a click event listener to the button
$('#' + gamePattern).click(function () {
    let sound = new Audio("sounds/"+gamePattern+".mp3");
    sound.play();

});
