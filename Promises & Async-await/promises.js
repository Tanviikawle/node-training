//LET'S MAKE ICE-CREAM
let is_shop_open = false;

let stocks = {
    fruits : ['strawberry', 'grapes','banana','apple'],
    holder : ['cone','cup','stick'],
    liquid : ['water','ice'],
    toppings : ['chocolate','sprinkles']
}

// let order = (fruit_name,call_production) => {
//     setTimeout(function(){
//         console.log(`${stocks.fruits[fruit_name]} was selected.`);
//         // console.log("Order placed. Please call production...");
//         call_production();
//     },2000)
// };

let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
        }else{
            reject(console.log('Our shop is closed.'));
        }
    })
}

// let production = () => {
//     setTimeout(()=>{
//         console.log("Production has started!")

//         setTimeout(()=>{
//             console.log("The fruits has been chopped.");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);

//                 setTimeout(()=>{
//                     console.log("Started the machine.")

//                     setTimeout(()=>{
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} as toppings`);

//                             setTimeout(()=>{
//                                 console.log('Serve the ice cream.')
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)

//     },0)
// };

order(2000,()=>{console.log(`${stocks.fruits[0]} was selected.`)})
.then(()=>{
    return order(0,()=>{console.log('production has started.')})
})
.then(()=>{
    return order(1000,()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added.`)})
})
.then(()=>{
    return order(1000,()=>{'started the machine.'})
})
.then(()=>{
    return order(2000,()=>{console.log(`Ice cream placed on ${stocks.holder[1]}.`)})
})
.then(()=>{
    return order(3000,()=>{`${stocks.toppings[0]} as toppings.`})
})
.then(()=>{
    return order(2000,()=>{console.log('serve the ice cream.')})
})
.catch(()=>{
    console.log("Customer left.")
})
.finally(()=>{
    console.log('End of day!')
})