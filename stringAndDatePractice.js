//1) Convert a string into array

// let str = 'this is so boring!';
// let arr = [];
// for(let s in str){
//     arr.push(str[s]);
// }
// console.log(arr)

// 2) Program to split a string and convert it into an array of words.
// let fullname = 'Tanvi Jayendra Kawle'
// let arr = [];
// let str=''

// for(let n=0;n<fullname.length;n++){
//     if(fullname[n] != ' ' ){
//         str += fullname[n]
//     }else{
//         arr.push(str);
//         str = '';
//     }
//     if(n == fullname.length-1){
//         arr.push(str);
//         str = '';
//     }
// }
//console.log(arr)

// 3) Extract a specified number of characters from a string.

// function truc(str,len){
//     let res = '';
//     for(let s=0;s<len;s++){
//         res += str[s];
//     }
//     return res;
// }
// console.log(truc('Robin hood',4));

// 4)JavaScript function to convert a string into abbreviated form.

// function abbr(str){
//     let res= "";
//     for( let s in str){
//         if(str[s]==' '){
//             res += " "+str[Number(s)+1]+".";
//             break;
//         }else{
//             res += str[s];
//         }
//     }
//     return res;
// }

// console.log(abbr('Tanvi Kawle'));

// 5) Javascript function that hides the email address.
// function hideEmail(str){
//     let res = '';   
//     var i 
//     for(i=0;i<5;i++){
//         res += str[i]
//     }
//     while(str[i] != '@'){
//         res += '.'
//         i++;
//     }
//     for(i;i<str.length;i++){
//         res += str[i];
//     }
//     return res;
// }

// console.log(hideEmail('tiokawle@gmail.com'));

// 6) JavaScript function to parameterize a string
function parametarized(str){
    let res = '';
    for(let s in str){
        if(str[s]==' '){
            res += '-';
        }else{
            res += str[s];
        }
    }
    return res;
} 

console.log(parametarized("Robin Singh from USA."));

// 7) JavaScript function to capitalize the first letter of each word in a string.
function capitalize(str){
    let res = '';
    for(let s in str){
        if(str[Number(s)-1]== ' ' || s == 0){
            res += str[s].toUpperCase();
        }else{
            res += str[s];
        }
    }
    return res;
}
console.log(capitalize("js string exercises"))

// 8) Swap case of letters of string.
function swapCase(str){
    let res = '';
    for(let s in str){
        if(str[s]==str[s].toUpperCase()){
            res += str[s].toLowerCase();
        }else if(str[s]==str[s].toLowerCase()){
            res += str[s].toUpperCase();
        }else{
            res += str[s];
        }
    }
    return res;
}
console.log(swapCase("This song Is so aMaZing!!"));

// 9) Convert string to camel case.
function camelCase(str){
    let res = '';
    for(let s=0 ; s< str.length;s++){
        if(str[s]==' '){
            res += str[Number(s)+ 1].toUpperCase();
            s++;
        }else{
            res += str[s];
        }
    }
    return res;

}
console.log(camelCase('Convert this string to camel case.'));

// 10) Concatenate string n times, (Default is 1)
function concatenate(str,n=1){
    let res = '';
    while(n > 0){
        res += str;
        n --;
    }
    return res;
}

console.log(concatenate('Hello',4));


// 11)JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc

// function humanize(num){
//     let res = '';
//     if(num == 1){
//         res += num+'st';
//     }else if(num % 10 == 2){
//         res += num+'nd';
//     }else if(num % 10 == 3){
//         res += num+'rd';
//     }else{
//         res += num+'th';
//     }
//     return res;
// }

// console.log(humanize(43))

//12) Print how mant times a given substring is present in substring.

// function countSubstring(str,subStr){
//     let count = 0;
//     let temp = 0;
//     let x = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==subStr[temp]){
//             while(temp<subStr.length){
//                 temp++;
//                 i++;
//                 if(subStr[temp]!=str[i]){
//                     break;
//                 }
//             }
//             if(temp == subStr.length){
//                 x ++;
//             }
//             temp = 0;
//         }
//     }
//     return x;
// }

// console.log(countSubstring('The fox is very very very cute fox','very'));

// 13) arrange given string alphabetically

// function arrangeAlphbetically(str){
//     let temp ='';
//     let arr = [];
//     for(let k in str){
//         arr.push(str[k])
//     }
//     for(let i in arr){
//         for(let j in arr){
//             if(arr[i]<arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     temp='';
//     for(let f in arr){
//         temp += arr[f];
//     }
//     return temp;
// }

// console.log(arrangeAlphbetically('United States'));



















