// random number generator
// var n = Math.round(Math.random() * 10)
// console.log(n)


// (2/2 == 1)?console.log("usjan"):console.log("false")




// Write a function that outputs (returns) a different message depending on the BMI.



// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

function bmiCalculator(weight, height){
    const interpretation = Math.round((weight)/(height**2))
    return interpretation
}

// var bm = Math.floor(bmi(65, 1.8)); 
const bmi = Math.round(bmiCalculator(65, 1.8)); 

if (bmi<18.5) {
    console.log(`"Your BMI is ${bmi}, so you are underweight.`)
}else if (bmi>=18.5 && bmi <24.9) {
    console.log(`"Your BMI is ${bmi}, so you have a normal weight."`)
    
}else{
    console.log(`"Your BMI is ${bmi}, so you are overweight."`)
}