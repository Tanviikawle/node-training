// function anagram(str1,str2){
//     const arr1 = str1.split('').sort();
//     const arr2 = str2.split('').sort();

//     if(arr1.length == arr2.length){
//         for(let i of arr1){
//             if(arr1[i] != arr2[i]){
//                 return false;
//             }
//         }
//     }else{
//         return false;
//     }
//     return true;
// }

// console.log(anagram('brag','grabf'));

// function duplicate (nums) {
//     const map = new Map()
//     for(let i in nums){
//         if(!map.has(nums[i])){
//             map.set(nums[i],1);
//         }
//     }
//     nums.length = 0;
//     let keys = Array.from(map.keys());
//     nums = keys.slice()
//     console.log(nums)
//     return keys.length;
// };

// duplicate([1,1,3,2,4,4,5,6,6,6,7,8]);

// var removeElement = function(nums, val) {
//     let len=0;
//     let count = 0;
//     let start;
//     let temp = [];
//     let deleted;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==val){
//             temp=null;
//             start = i
//             console.log(start,i)
//             while(nums[i]== val){
//                 count++;
//                 i++;
//             }
//             temp = nums.splice(start,count)
//             nums.push(...temp);
//         }
//     }
//     console.log(temp)
//     console.log(nums)
//     len = nums.indexOf(val);
//     // nums.concat(temp)
//     return len;
// };

// console.log(removeElement([3,2,2,3],3))

//LAST UNDEFINED IS RETURNED VALUE OF FUNCTION

var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length;i++){
        if(needle[0]==haystack[i]){
            console.log(haystack[i])
            console.log('found!');
        }
    }
};

console.log(strStr("mississippi","issip"));