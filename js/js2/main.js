// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!


// function whosPaying(names) {

//     /******Don't change the code above*******/

//     //Write your code here.
//     console.log(`${names} is going to buy lunch today!`)

//     /******Don't change the code below*******/
// }
// const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// const num = names.length - 1
// const sponsor = Math.round(Math.random() * num)



// whosPaying(names[sponsor])

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.


// function lyrics() {
//     let numberBottles = 9

//     while (numberBottles > 0) {
//         // if (numberBottles == 1) {
            
//         // }
//         console.log(`${numberBottles} ${(numberBottles===1)?'bottle':'bottles'} of beer on the wall, ${numberBottles} bottles of beer`)
//         console.log(`Take one down and pass it around, ${(numberBottles===1?'no more':numberBottles-1)} ${(numberBottles<=2)?'bottle':'bottles'} of beer on the wall.\n`)
//         numberBottles--;
//     }
//     console.log(`No more bottles of beer on the wall, no more bottles of beer.`)
//     console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`)

// }
// lyrics()

function fibonnaci(number){

    let series = [0,1];
    

    if (number === 1) {
        return 0
        
    }
    if (number === 2) {
        return [0,1]
        
    }

    for (let i = 2; i < number; i++) {
        // series.push(i)
        const num = series[i-1] + series[i-2]
        // console.log(num)
        series.push(num)
        // console.log(series[i-1])
        // console.log(series[i-2])

        
    }
    // return series
    console.log(series)


}
fibonnaci(10)
// console.log(fibonnaci(5))