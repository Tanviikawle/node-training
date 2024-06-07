//problem-1 : return maximum

// function maximum (num1 ,num2){
//     return (num1 > num2) ? num1 : num2
// }

// console.log(maximum(49,32))

//problem-2 : landscape or portrait

// function isLandscape(width , length){
//     return (width > length)
// }

// console.log(`Is the image landscape ?  ${isLandscape(120,650)}`)

//problem-3 : fizzbuzz

// function fizzbuzz(num){
//     let i=1
//     while(i !== num){
//         if(typeof num !== 'number') console.log("Provide valid number.")
//         if(i % 15 === 0) console.log("FizzBuzz")
//         else if(i % 3 === 0) console.log("Fizz")
//         else if(i % 5 === 0) console.log("Buzz")
//         else console.log(i)
//         i++ 
//     }
// }

// fizzbuzz(100)

//problem-4 : Demerit points

// checkSpeed(97);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint )
//         console.log("Ok")
//     else {
//         const points = Math.floor((speed - speedLimit)/kmPerPoint)
//         if(points>=12)
//             console.log("Lisense suspended")
//         else
//             console.log("Points: " + points)
    
//     }

// }

//problem-5 : print even odd

// showNumbers(27)

// function showNumbers(bound){
//     let current = 1;
//     while(current <= bound){
//         msg = (current % 2 === 0)? "Even" : "Odd"
//         console.log(current,msg)

//         current+=1
//     }
// }

//problrm-6 : count truthy values 

// const arr = [0, null, "", 2, "Hii"]
// countTruthyValues(arr)

// function countTruthyValues(inputArray){
//     let count = 0
//     for( let value in inputArray){
//         if(value)
//             count += 1
//     }
//     console.log(count)
// }

//problem-7 : show nly string properties of object

// const test = {
//     name : "String",
//     age : 12,
//     occupation : "Engineering",
//     isMarried : false,
// }
// showProperties(test)

// function showProperties(obj){
//     for(let val in obj){
//         if(typeof obj[val] === 'string')
//             console.log(val , obj[val])
//     }       
// }

//problem-8 : Grades

// function calculateGrade(arr){
//     let sum = 0
//     let len = arr.length
//     for(let a of arr){
//         sum = sum + a
//     }
//     avg = sum/len;
//     if(avg<=0) console.log("zero marks")
//     else if (avg<60) console.log("F")
//     else if (avg<70) console.log("D")
//     else if (avg<80) console.log("C")
//     else if (avg<90) console.log("B")
//     else console.log("A")
// }
// const marks = [80,80,80]

// calculateGrade(marks)

//problem-9 : Stars

// function stars(limit){
//     for(let i=1;i<=limit;i++){
//         let pat=""
//         for(let j=1;j<=i;j++){
//            pat += "*"
//         }
//         console.log(pat)
//     }
// }
// stars(5)

//problem-10 : prime numbers 

// function isPrime(limit){
//     for(let number = 2;number <= limit;number++){
//         let prime = true
//         for(let factor = 2;factor < number;factor ++){
//             if(number % factor === 0)
//                 prime = false
//         }
//         if (prime) console.log(number)
//     }
// }
// isPrime(17)

//OBJECT PROBLEMS

//problem-1 : Create factory function and constructr function

//factory function
// let address1 = createAddress("a","b","c")
// console.log(address1)
// function createAddress(street,city,zipcode){
//     return {
//         street,
//         city,
//         zipcode
//     }
// }

// //constructor function
// let address2 = new Address("a","b","c")
// console.log(address2)
// function Address(street,city,zipcode){
//     this.street = street,
//     this.city = city,
//     this.zipcode = zipcode
// } 

//ARRAY PROBLEMS

//problem-1 : Print an array withing a given range.

// function arrayFromRange(min,max){
//     let arr = []
//     for(let i = min;i<=max;i++){
//         arr.push(i)
//     }
//     return arr
// }

// let res = arrayFromRange(5,20)
// console.log(res)

//problem-2 : Includes

// function isPresent(num , arr){
//     let flag = false
//     for(let i of arr){
//         if(i === num)
//             flag = true
//     }
//     return flag
// }

// arr = [5,  6,  7,  8,  9, 10,
//     11, 12, 13, 14, 15, 16,
//     17, 18, 19, 20]

// console.log(isPresent(78,arr))


//problem-3 : except

// let number = [1,2,3,4,5,6,7,8,9,10]

// const output = except(number , [1,3,5,7,9])
// console.log(output)

// function except(arr1,arr2){
//     let res = []
//     for(let value of arr1){
//         if(!arr2.includes(value))
//             res.push(value)
//     }
//     return res
// }


//problem-4 : Moving an element

//problem-5 : Count Occurence

// function countOccurence(arr, element){
//     if(!Array.isArray(arr))
//         throw new Error('Invalid array')
//     let occ = 0
//     for (let val of arr){
//         if(element == val)
//             occ +=1;
//     }
//     return occ
// }
// try{
//     arr = [1,4,4,2,3,2,4,3,5,6,7]
//     console.log(countOccurence(arr , 4))
// }
// catch(e){
//     console.log(e.message)
// }


//problem-6 : print maximum number from array
// const arr = [12,23,1,65,78,34,8,79]
// function max(array){
//     let sample = 0
//     for(let value of array){
//         if(value>sample)
//             sample = value
//     }
//     return sample
// }

// console.log(max(arr))

//problem-7 : Movies

// const movies =[
//     {title: 'a', year: 2018,rating: 4.5},
//     {title: 'b', year: 2018,rating: 4.7},
//     {title: 'c', year: 2018,rating: 3},
//     {title: 'd', year: 2017,rating: 4.5}
// ]

// getMovie(movies)

// function getMovie(arr){
//     let res = []
//     for(let movie of arr){
//         if((movie.year == 2018) && ( movie.rating > 4)){
//             res.push(movie)
//         }
//     }
//     res.sort((a,b)=>b.rating-a.rating)
//     for(let m of res){
//         console.log(m.title)
//     }
// }