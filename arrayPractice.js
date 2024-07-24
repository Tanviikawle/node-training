// const arr = [1,1,2,3,5,7,7,4,4,8];
// let len = arr.length;
// let flag = false
// let res1=[];
// let res2=[];

// function ispresent(arr,num){
//     flag = false;
//     for(let i of arr){
//         if(i == num) flag = true;
//     }
//     return flag;
// }

// for(let n=0;n<len;n++){
//     if(!ispresent(res1,arr[n])){
//         res1.push(arr[n]);
//     }else if(!ispresent(res2,arr[n])){
//         res2.push(arr[n]);
//     }
// }

// for(let j=0;res2.length<res1.length;j++){
//     if(!ispresent(res2,res1[j])){
//         res2.push(res1[j]);
//         res1.splice(j,1)
//     }
// }

// if(res1.length!=res2.length) {console.log(false)} else {console.log(true)}
// console.log(res1);
// console.log(res2);


//1) Check whether given input is array or not

// let input = [1,2,3];
// function is_Array(arr){
//     if(toString.call(arr)==="[object Array]") return true;
//     else return false;
// }

// console.log(is_Array(input));

//2) Cloning array
// const arr = [1,2,3,4];
// const arr2 = [1,2,[3,4]];
// let result=[];
// for(let k of arr2){
//     // result[k] = arr2[k]
//     result.push(k)
// }

// console.log(result);

//3) Get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// testArrey = [1,2,3,4,5,6,7,8,9]

// function getElements(arr,n){
//     let temp = n;
//     while(n>0){
//         console.log(arr[temp])
//         temp++;
//         n--;
//     }
// }

// getElements(testArrey,4)

//4) Get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// testArrey = [1,2,3,4,5,6,7,8,9]

// function getLastElement(arr,n){
//     let temp = arr.length-1;
//     let count = 1;
//     let result = []
//     while(count <= n){
//         result.push(arr[temp]);
//         temp--;
//         count ++;
//     }
//     return result;
// }
// console.log(getLastElement(testArrey,4));

//5) Write a simple JavaScript program to join all elements of the following array into a string.
//  const arr = ['hii',true,'Hello'];
//  let res='';
//  for(let i in arr){
//      res += arr[i];
//      if(i != arr.length-1){
//         res += '.';
//      }
//  }
//  console.log(res)

//6) JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
// let input = "025468"
// let test=[]
// let output = ''
// for(let i of input){
//     test.push(Number(i))
// }

// for(let k in test){
//     output += test[k];
//     if(test[k] % 2 == 0 && test[Number(k)+1] % 2 == 0){
//         console.log(test[k])
//         output += '-';
//     }
// }

// console.log(test);
// console.log(output);

//7) Sort the items of an array.
// const arr = [1,1,2,3,5,7,7,4,4,8];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr)

//8) Find the most frequent item in an array.

// const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let highest = 0;
// let occ = 0;
// let index = 0;
// for(let i=0;i<arr.length;i++){
//     occ = 0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             occ++;
//         }
//     }
//     if(highest < occ){
//         highest = occ;
//         index = i;
//     } 
// }
// console.log(`Most present element is ${arr[index]} ( ${highest} times)`)

//9) Swaps the case of each character
// const testString = 'tHE qUICK bROWN fOX';
// let final = ''

// for(let i of testString){
//     if(i == i.toUpperCase()){
//         final += i.toLowerCase()
//     }else{
//         final += i.toUpperCase()
//     }
// }

// console.log(testString);
// console.log(final);

// 10) Print the elements of the following array.
// var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let r in arr){
//     console.log(`row ${r}`)
//     for(let i in arr[r]){
//         console.log(arr[r][i])
//     }
// }

//11) Sum and Prduct of array elements
// const arr =  [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// let sum = 0;
// let prod = 1;
// for(let f of arr){
//     sum += f;
// }

// for(let f of arr){
//     prod = prod * f;
// }
// console.log(sum)
// console.log(prod)

//12) Remove duplicates from an array
// const arr = [1,1,2,3,5,7,7,4,4,8];
// let res = [];
// let len = arr.length;
// let flag = false

// for(let i=0;i<arr.length;i++){
//     flag = false;
//     for(let j=0;j<res.length;j++){
//         if(arr[i] == res[j]){
//             flag = true;
//         }
//     }
//     if(!flag){
//         res.push(arr[i])
//     }
// }

// console.log(res)

//13) Find leap year in specific range.
// const range = 3000
// let year =new Date
// year=year.getFullYear()
// while(year<=range){
//     if(year%4==0){
//         console.log(year);
//     }
//     year += 1;
// }

// 14)Combine two array without duplicate values
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,3,7,8]
// for(let i=0;i<arr1.length;i++){
//     let flag = false;
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             flag = true;
//         }
//     }
//     if(!flag){
//         arr2.push(arr1[i]);
//     }
// }
// console.log(arr2)

// 15) Sum the number of two arrays.
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,3,7,8,9,10,11]
// let len1 = arr1.length;
// let len2 = arr2.length;
// let diff = 0;
// let result;

// if(len1>len2){
//     diff = len1-len2;
//     result = add(arr1,arr2,diff);
// }else{
//     diff = len2-len1;
//     result = add(arr2,arr1,diff);
// }

// function add(arrOne,arrTwo,n){
//     let temp = 0
//     let res = [];
//     for(let i in arrTwo){
//         res.push(arrTwo[i]+arrOne[i]);
//         temp = i;
//     }
//     while(n>0){
//         temp++;
//         res.push(arrOne[temp]);
//         n--;
//     }
//     return res;
// }
// console.log(result)

//16) Remove Falsy values from array
// const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let res = [];
// for(let i in arr){
//     if(arr[i]){
//         res.push(arr[i])
//     }
// }
// console.log(res)


//Task: How to iterate over nested object
// let mainObj = {investments:
//     {
//         sip:{
//             'live':[1,3],
//             'completed':[],
//             'paused':[],
//             'cancelled':[],
//             'dead':[1,8,67]
//         },
//         swp:{
//             'live':[],
//             'completed':[],
//             'paused':[],
//             'cancelled':[]
//         },
//         stp:{
//             'live':[],
//             'completed':[],
//             'paused':[],
//             'cancelled':[],
//             'value':[]
//         }
//     }
// }

// for(let inner in mainObj){
//     let nested = mainObj[inner]
//     for(let n in nested){
//         let mostInnerObj = nested[n]
//         for(let i in mostInnerObj){
//             mostInnerObj[i]=mostInnerObj[i].length
//         }
//     }
// }

// console.log(mainObj)

// 17) Find the pair of elements whose sum is eual tpo specific value .
// const numbers= [10,20,10,40,50,60,70];
// const target = 50;

// for(let i in numbers){
//     for(let j in numbers){
//         if(numbers[i]+numbers[j]==target){
//             console.log(i,j)
//         }
//     }
// }

// 18) JavaScript function to move an array element from one position to another

// function move(arr,firstPlace,secondPlace){
//     let temp = arr[firstPlace];

//     while(firstPlace < secondPlace){
//         arr[firstPlace] = arr[firstPlace+1];
//         firstPlace ++;
//     }
//     arr[secondPlace]=temp;
//     return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 4));

//19) Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// function arrayRange(start,range){
//     let count = 1;
//     let res =[];
//     while(count <= range){
//         res.push(start);
//         start++;
//         count++;
//     }
//     return res
// }

// console.log(arrayRange(-6,4))

// 20) JavaScript function to generate an array between two integers of 1 step length

// function generateArray(start,end){
//     let res = [];
//     while(start <= end){
//         res.push(start);
//         start ++;
//     }
//     return res
// }

// console.log(generateArray(1,10));

// 21) find third largest number from array

// const arr = [1,1,2,9,55,48,3,5,7,7,4,4,8];
// let res = [];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// let res2 = []
// let flag = false;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<res2.length;j++){
//         flag = false
//         if(res2[j]==arr[i]){
//             flag = true;
//         }
//     }
//     if(!flag){
//         res2.push(arr[i]);
//     }
// }
// console.log(res2[3])

// 22) JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// const arr = [2, 3, 0, 5, 7, 8, true, false];
// var sum = 0

// for(let i in arr){
//     if(typeof arr[i] == 'number'){
//         sum = sum + arr[i];
//     }
// }

// console.log(sum)

// 23) JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// let arr = [2, 4, NaN, 16, 32, NaN];
// let indexArray = [];

// for(let a in arr){
//     if(isNaN(arr[a])){
//         indexArray.push(a);
//     }
// }
// console.log(indexArray)

// 24) Check if an array contains prime number or not.
// const arr = [2,3,5,8,7];
// let flag = false;

// for(let n in arr){
//     let temp = 2;
//     while(temp<n){
//         if(n % temp == 0 ){
//             flag = true;
//             break;
//         }
//         temp++;
//     }
//     if(flag) break;
// }
// console.log(flag)

// 25) Check whether array or string is palindrome or not

// let arr = [5,4,3,4,4,5];
// let start = 0;
// let last = arr.length-1
// let half = Math.round(arr.length/2);
// let flag = true;
// while(start<=half){
//     if(arr[start] != arr[last-start]){
//         flag = false;
//         break;
//     }
//     start++;
// }
// console.log(flag);

