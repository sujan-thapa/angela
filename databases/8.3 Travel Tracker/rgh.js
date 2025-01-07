// let a = [ 'FR', 'GB', 'US' ]
// let a = "lll jjj gfctf fdxrfcy"

// console.log(a.split(" "))


let newCountry = [];

let randArr = [{ id: 90, country_code: 'GU', country_name: 'Guam' },
{ id: 91, country_code: 'GT', country_name: 'Guatemala' },
{ id: 92, country_code: 'GG', country_name: 'Guernsey' },
{ id: 93, country_code: 'GN', country_name: 'Guinea' },
{ id: 94, country_code: 'GW', country_name: 'Guinea-Bissau' },
{ id: 95, country_code: 'GY', country_name: 'Guyana' },
{ id: 96, country_code: 'HT', country_name: 'Haiti' }]

let a = "Haiti";
let matchedCountry = randArr.find((country) => country.country_name === a);
console.log(matchedCountry)
console.log(typeof(matchedCountry))

// randArr.forEach((country)=>console.log(country.country_name))
if (matchedCountry) {
    newCountry.push(matchedCountry.country_code);
  } else {
    console.log("error");
  }
  
// if (randArr.find((country)=>a === country.country_name)) {
//     newCountry.push(country.country_code)
// }else{
//     console.log("error")
// }

console.log(newCountry)