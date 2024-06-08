//OPERATORS

//1.Arithmatic operators

// let num1 = 5;
// let num2 = 7;

// const operate = (op,num1,num2)=>{
//     switch(op){
//         case "+":
//             console.log(`Addiion of ${num1} and ${num2} is ${num1+num2}.`);
//             break;
//         case "-":
//             console.log(`Subtraction of ${num1} and ${num2} is ${num1-num2}.`);
//             break;
//         case "*":
//             console.log(`Multiplication of ${num1} and ${num2} is ${num1*num2}.`);
//             break;
//         case "/":
//             console.log(`Division of ${num1} and ${num2} is ${num1/num2}`);
//             break;
//         case "%":
//             console.log(`Remainder of ${num1} and ${num2} is ${num1%num2}.`);
//             break;
//         case "**":
//             console.log(`${num1} to the power of ${num2} is ${num1**num2}.`);
//             break;
//         default :
//             return "Invalid input."
//     }
// }

// operate("+",num1,num2);


// result = num1 + num2;
// console.log(`Addiion of ${num1} and ${num2} is ${result}.`);

// result = num1 - num2;
// console.log(`Subtraction of ${num1} and ${num2} is ${result}.`);

// result = num1 * num2;
// console.log(`Multiplication of ${num1} and ${num2} is ${result}.`);

// result = (num1 / num2).toFixed(2);
// console.log(`Division of ${num1} and ${num2} is ${result}`);

// result = num1 % num2;
// console.log(`Remainder of ${num1} and ${num2} is ${result}.`);

// result = num1 ** num2;
// console.log(`${num1} to the power of ${num2} is ${result}.`);

// result  = num1++;
// console.log(`${num1} plus one is ${result}.`);

// result  = num1--;
// console.log(`${num1} minus one is ${result}.`);

//Assignment operators

// console.log(num1 += num2)
// console.log(num1 -= num2)
// console.log(num1 *= num2)
// console.log(num1 /= num2)
// console.log(num1 %= num2)
// console.log(num1 **= num2)


//Consider following strings:

// let testString1 = 1;
// let testNum = "1";
// if(testString1 === testNum){
//     console.log("Both value and type of both string is same.")
// }
// else if(testString1 == testNum){
//     console.log("Value of both string is same type may be different.")
// }else{
//     console.log("Both strings are different.")
// }

//Comaprison operator - Check wheteher user is eligible fo voting or not.

// let persons = []
// let country_list = ['USA','UK','Canada','India'];

// for(let i=1;i<=30;i++){
//     let person = {
//         age : Math.round(Math.random()*100),
//         nation: country_list[Math.round(Math.random()*3)]
//     }
//     persons.push(person)
// }


// for(person of persons){
//     if(person.age >= 18 && person.nation === 'India'){
//         console.log("User can vote.")
//     }else if (person.age >= 18 || person.nation === 'India'){
//         console.log("either user is under age or not the resident of India.")
//     }else{
//         console.log("User is not eligible for voting.")
//     }
// }

// console.log("Using while loop -")

// let len = persons.length
// let i=0

// while(i<=len-1){
//     if(persons[i].age >= 18 && persons[i].nation === 'India'){
//         console.log("User can vote.")
//     }else if (persons[i].age >= 18 || persons[i].nation === 'India'){
//         console.log("either user is under age or not the resident of India.")
//     }else{
//         console.log("User is not eligible for voting.")
//     }
//     len--;
//     i++;
// }

