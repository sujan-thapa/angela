// document.querySelector("button").addEventListener("click", handleClick)

//  detecting button press
function handleClick() {
    // console.log(this.innerHTML)
    // this.style.color = "white"
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)

   


}

const sujan = document.querySelectorAll(".drum")
// console.log(sujan)
// sujan.map((item)=>console.log(item))
for (let index = 0; index < sujan.length; index++) {
    const element = sujan[index];
    // console.log(element)
    element.addEventListener("click", handleClick)

}


// detecting keyboard press
document.addEventListener("keydown", function(event){
    // console.log(event);
    makeSound(event.key)
    buttonAnimation(event.key)

})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()

            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()

            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()

            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;


        default:
            break;
    }

}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        
    }, 1000);


}


