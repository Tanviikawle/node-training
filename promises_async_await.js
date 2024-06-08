//Callbacks

// let production = () =>{

//   setTimeout(()=>{
//     console.log("production has started")
//     setTimeout(()=>{
//       console.log("The fruit has been chopped")
//       setTimeout(()=>{
//         console.log(`Water and Ice Added`)
//         setTimeout(()=>{
//           console.log("start the machine")
//           setTimeout(()=>{
//             console.log(`Ice cream placed on cone.`)
//             setTimeout(()=>{
//               console.log(`Sprinkles as toppings`)
//               setTimeout(()=>{
//                 console.log("serve Ice cream")
//               },2000)
//             },3000)
//           },2000)
//         },1000)
//       },1000)
//     },2000)
//   },0)
// };

// production();


//Promises

// let isShopOpen = true

// let order = (time,work)=>{
//     return new Promise((resolve,reject)=>{ 
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
//         }else{
//             reject(console.log("Our shop is closed."))
//         }
//     })
// }

// // step 1
// order(2000,()=>console.log(`Strawberry was selected`))

// // step 2
// .then(()=>{
//   return order(0,()=>console.log('production has started'))
// })

// // step 3
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 4
// .then(()=>{
//   return order(1000, ()=>console.log(`Water and Ice added`))
// })

// // step 5
// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })

// // step 6
// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on cone`))
// })

// // step 7
// .then(()=>{
//   return order(3000, ()=>console.log(`Sprinkles as toppings.`))
// })

// // Step 8
// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })
// .catch(()=>{
//     console.log("Customer left.")
// })
// .finally(()=>{
//     console.log("End of the day.")
// })



//Async Await

// let is_shop_open = true;

// function time(ms) {
//    return new Promise( (resolve, reject) => {
//       if(is_shop_open){
//          setTimeout(resolve,ms);
//       }
//       else{
//          reject(console.log("Shop is closed"))
//       }
//     });
// }

// async function kitchen(){
// try{
// await time(2000)
// console.log(`Strawberry was selected`)

// await time(0)
// console.log("production has started")

// await time(2000)
// console.log("fruit has been chopped")

// await time(1000)
// console.log(`Water and ice added`)

// await time(1000)
// console.log("start the machine")

// await time(2000)
// console.log(`ice cream placed on cone`)

// await time(3000)
// console.log(`Sprinkles as toppings`)

// await time(2000)
// console.log("Serve Ice Cream")
//   }

// catch(error){
//  console.log("customer left")
//   }
// finally{
//   console.log("Day ended.")
//   }
// }


// kitchen()