//Create your function below this line.
//The first parameter should be the weight and the second should be the height.


function bmi(weight, height){
    const index = (weight)/(height**2)
    return index
}

// var bm = Math.floor(bmi(65, 1.8)); 
var bm = Math.round(bmi(65, 1.8)); 

console.log(bm)

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:


bmi should equal 20 when it's rounded to the nearest whole number.

*/
