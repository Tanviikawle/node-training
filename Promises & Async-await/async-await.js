let is_shop_open = true;

let stocks = {
    fruits : ['strawberry', 'grapes','banana','apple'],
    holder : ['cone','cup','stick'],
    liquid : ['water','ice'],
    toppings : ['chocolate','sprinkles']
}

function time(ms){
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Shop is closed."))
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected.`);

        await time(0)
        console.log('production has started.');

        await time(2000)
        console.log('Fruits has been chopped.');

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added.`);

        await time(1000)
        console.log('started the machine.');

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[1]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`);

        await time(2000)
        console.log('Serve the ice-cream');

    }
    catch(error){
        console.log("Customer left", error);
    }
    finally{
        console.log("Day ended, shop closed");
    }
}

kitchen();