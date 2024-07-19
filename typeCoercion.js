
// TYPE COERCION

// 1) String
// console.log('48' + 45)
// console.log('Hello' + true)
// console.log('Hello' + undefined)
// console.log('Hello' + null)

// console.log('Hello' - 45)
// console.log('Hello' - true)
// console.log('Hello' - undefined)
// console.log('Hello' - null)

// console.log('48' - 45)
// console.log('1' - true)
// console.log('0' - undefined)
// console.log('null' - null)

// 2) Number
// console.log(23 + "howdy?")
// console.log(12 + "2")
// console.log(67 + true)
// console.log(98 +undefined)
// console.log(8 + null)

// console.log(23 - "howdy?")
// console.log(12 - "2")
// console.log(67 - true)
// console.log(98 - undefined)
// console.log(8 - null)

// 3) Boolean
// console.log(true + "hii")
// console.log(false + 45)
// console.log(true + undefined)
// console.log(false + null)
// console.log(true + false)

// console.log(true - "hii")
// console.log(false - 45)
// console.log(true - undefined)
// console.log(false - null)
// console.log(true - false)

// 4) undefined
// console.log(undefined + "a string")
// console.log(undefined + 100)
// console.log(undefined + true)
// console.log(undefined + null)
// console.log(undefined + undefined)
// console.log(undefined == undefined)
// console.log(undefined === undefined)

// console.log(undefined - "a string")
// console.log(undefined - 100)
// console.log(undefined - true)
// console.log(undefined - null)
// console.log(undefined - undefined)

// 5) Null
// console.log(null + "a string")
// console.log(null + 100)
// console.log(null + true)
// console.log(null + null)
// console.log(null + undefined)

// console.log(null - "a string")
// console.log(null - 100)
// console.log(null - true)
// console.log(null - null)
// console.log(null - undefined)

// 6) Object
// console.log({name: "Anna",age: 46} + "a string")
// console.log({name: "Anna",age: 46} + 100)
// console.log({name: "Anna",age: 46} + true)
// console.log({name: "Anna",age: 46} + null)
// console.log({name: "Anna",age: 46} + undefined)

// console.log({name: "Anna",age: 46} - "a string")
// console.log({name: "Anna",age: 46} - 100)
// console.log({name: "Anna",age: 46} - true)
// console.log({name: "Anna",age: 46} - null)
// console.log({name: "Anna",age: 46} - undefined)

// 7) Array
// console.log([23,6,5] + "a string")
// console.log([23,6,5] + 100)
// console.log([23,6,5] + true)
// console.log([23,6,5] + null)
// console.log([23,6,5] + undefined)

// console.log([23,6,5] - "a string")
// console.log([23,6,5] - 100)
// console.log([23,6,5] - true)
// console.log([23,6,5] - null)
// console.log([23,6,5] - undefined)

// Object-Array
// console.log([1,2,3] + {name: "Anna",age: 46})
// console.log([1,2,3] - {name: "Anna",age: 46})

//loose type checking execptions
// console.log(null==undefined)
// console.log([2,3]==[2,3])
// console.log([2,3]==[2,3,4])
// console.log([2,3]=={name: "Anna",age: 46})
// console.log({name: "Anna",age: 46}=={name: "Anna",age: 46})
// console.log({name: "Sam",age: 47}=={name: "Anna",age: 46})
// console.log(true==1)
// console.log(false==0)

//Strict type checking
// console.log(null===undefined)
// console.log([2,3]===[2,3])
// console.log([2,3] === [2,3,4])
// console.log([2,3] === {name: "Anna",age: 46})
// console.log({name: "Anna",age: 46}==={name: "Anna",age: 46})
// console.log({name: "Sam",age: 47}==={name: "Anna",age: 46})
// console.log(true===1)
// console.log(false===0)
// console.log(true===true);



