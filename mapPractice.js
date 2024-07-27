// 1) BASIC ARRAY TRANSFORMATION
//Given an array of numbers, use map() to create a new array where each number is doubled.

const numbers = [1, 2, 3, 4, 5];
//Using map constructor
// const map = new Map();
// for(let m in numbers){
//     map.set(m,numbers[m]*2)
// }
// console.log(map)

//Using map function.
// const result = numbers.map(num => num*2);
// console.log(result)

// 2) EXTRACTING PROPERTY VALUES
//Given an array of objects representing people, use map() to create a new array containing only their names.
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const result = people.map(obj => obj.name)

//   console.log(result)

// 3) CONVERTING DATA TYPES
//Given an array of strings representing numbers, use map() to create a new array where each string is converted to a number.
// const stringNumbers = ['1', '2', '3', '4', '5'];

// const result = stringNumbers.map(num => Number(num));
// console.log(result);

// 4) ADDING PROPERTY TO OBJECTS
//Given an array of objects representing products, use map() to create a new array where each object includes a new property isAvailable set to true.
// const products = [
//     { id: 1, name: 'Laptop' },
//     { id: 2, name: 'Phone' },
//     { id: 3, name: 'Tablet' }
//   ];

// const final = products.map( obj => ({
//     ...obj,
//     isAavailable: true,
// }))
// console.log(final)

// 5) CREATING A NEW ARRAY OF OBJECTS
//Given an array of objects representing students, use map() to create a new array where each object contains only the name and a new property grade which is initially set to null.
// const students = [
//     { id: 1, name: 'John', age: 17 },
//     { id: 2, name: 'Jane', age: 16 },
//     { id: 3, name: 'Jim', age: 18 }
//   ];

//   const result = students.map( stud => ({
//     name:stud.name,
//     grade:null
//   }))

//   console.log(result)


// 6) TRANSFORMING AN ARRAY OF ARRAYS
//Given an array of arrays, where each sub-array contains two numbers, use map() to create a new array of sums of each sub-array.
// const numberPairs = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];

//   const result = numberPairs.map( sum => sum[0]+sum[1])
//   console.log(result);

// 7) CONVERTING T UPPERCASE
//Given an array of strings, use map() to create a new array where each string is converted to uppercase.
// const words = ['hello', 'world', 'javascript', 'map'];
// const result = words.map( word => word.toUpperCase());
// console.log(result);

// 8) EXTRACTING NESTED PROPERTY VALUES
//Given an array of objects representing books, use map() to create a new array containing the titles of the books. Each book object has a nested structure.
// const books = [
//     { id: 1, info: { title: 'The Catcher in the Rye', author: 'J.D. Salinger' } },
//     { id: 2, info: { title: 'To Kill a Mockingbird', author: 'Harper Lee' } },
//     { id: 3, info: { title: '1984', author: 'George Orwell' } }
//   ];
// const res = books.map( book => book.info.title);
// console.log(res);

// 9) CALCULATING LENGTH OF STRINGS
//Given an array of strings, use map() to create a new array containing the lengths of each string.
// const sentences = ['I love programming', 'JavaScript is fun', 'Map is powerful'];
// const len = sentences.map( sen => sen.length);
// console.log(len);

// 10) CREATING LIST OF HTML ELEMENTS
//Given an array of strings, use map() to create a new array where each string is wrapped in an HTML <li> element.
// const items = ['Item 1', 'Item 2', 'Item 3'];

// const res = items.map(i => `<i>${i}</i>`);
// console.log(res);



