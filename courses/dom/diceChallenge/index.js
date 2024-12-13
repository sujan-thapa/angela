// const randomNumber1 = Math.round(Math.random()*6)
const randomNumber1 = Math.round(Math.random() * (6 - 1) + 1)
const randomNumber2 = Math.round(Math.random() * (6 - 1) + 1)


console.log(randomNumber1)
console.log(randomNumber2)


// const dice1 = document.getElementsByClassName("img1")
// const dice1 = document.querySelector("img").attributes
// const dice1 = document.querySelector("img").getAttribute("src")
document.querySelector("img").setAttribute("src",`images/dice${randomNumber1}.png`)
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${randomNumber2}.png`)



if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
    
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!"

}else{
    document.querySelector("h1").textContent = "Draw!"

}

// The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }