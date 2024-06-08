//EXAMPLE : Calculate area , diameter and circumference of circle using radius.
const radius = 4
let res = 0

//Using named functions.

//While using named functions we can create 3 different functions for each area, diameter and circumference.
function area(radius){
    return((Math.PI * radius * radius).toFixed(3));
}

function diameter(radius){
    return((2 * radius).toFixed(3));
}

function circumference(radius){
    return((Math.PI * radius *2).toFixed(3));
}

// console.log(`Area is ${area(radius)} ,diameter is ${diameter(radius)} and lastly circumference is ${circumference(radius)}.`)

//Using anonumyous function or function expression.


const areaOfCircle = function(radius){
    res = (Math.PI * radius * radius).toFixed(3);
    // console.log(res);
    return res;
}

const dimOfCircle = function(radius){
    return((2 * radius).toFixed(3));
}    


const cirOfCircle = function(radius){
    return((Math.PI * radius *2).toFixed(3));
}
// console.log(`Area is ${areaOfCircle(radius)} ,diameter is ${dimOfCircle(radius)} and lastly circumference is ${cirOfCircle(radius)}.`)


//Using Arow functions.
const circleArea = (radius)=> (Math.PI * radius * radius).toFixed(3) ;
const circleDiameter = (radius)=> (2 * radius).toFixed(3);
const circleCirumference = (radius)=> (Math.PI * radius *2).toFixed(3);

//Using higher order functions.
const calculate = function(radius,logic){
    return logic(radius);
}

console.log(calculate(radius,areaOfCircle))
console.log(calculate(radius,dimOfCircle))
console.log(calculate(radius,cirOfCircle))