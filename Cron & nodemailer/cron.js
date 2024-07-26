// const cron = require('node-cron');

// cron.schedule('* * * * * *',()=>{
//     console.log('Running every second.')
// })

// cron.schedule('* * * * *',()=>{
//     console.log('Running every minute.')
// })

const cron = require('node-cron');
const axios = require('axios')
//LOG MESSAGE AFTER SPECIFIC DURATION.
// cron.schedule('*/3 * * * * *', ()=>{
//     console.log('Logging after each 3 seconds.')
// })

//FETCH DATA FROM AN API AND LOG IT.
// cron.schedule('* * * * *',async()=>{
//     const res = await axios.get(' https://random-data-api.com/api/v2/users?size=2&is_xml=true');
//     console.log(res);
// })

//CLEAN UP OLD FILES BY EMPTYING RECYLE BIN.

cron .schedule('*/5 * * * * *',async()=>{
    try{
        // const res = await axios.get(' https://random-data-api.com/api/v2/users?size=2&is_xml=true');
        const res = await axios.get(' http://localhost:3000');
        const {status, statusText } = res;
        console.log(status,statusText);
    }catch(err){
        console.log(`Error occured: ${err.message}`)
    }
})

