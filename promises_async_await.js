//Callbacks

//Promises

let isShopOpen = true

let order = (time,work)=>{
    return new Promise((resolve,reject)=>{ 
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("Our shop is closed."))
        }
    })
}

// step 1
order(2000,()=>console.log(`Strawberry was selected`))

// step 2
.then(()=>{
  return order(0,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})
.catch(()=>{
    console.log("Customer left.")
})
.finally(()=>{
    console.log("End of the day.")
})



//Async Await

// function order(){
//     return new Promise ((resolve,reject)=>{
//         async function order(){

//         }
//     })
// }
