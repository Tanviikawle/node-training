const express = require('express');
const app = express();
const moment = require('moment-timezone');

// console.log(moment.tz.names())

function getCurrentTimeInUSTimeZone() {
    const timeZones = ['Africa/Abidjan','Africa/Accra','Africa/Addis_Ababa','Africa/Algiers','Africa/Ceuta']; // You can change this to the desired US time zone
    for(let time in timeZones){
        const now = moment.tz(time);
        const formattedTime = now.format('YYYY-MM-DD HH:mm:ss');
        console.log(`Current time in time zone (${timeZones[time]}): ${formattedTime}`);
    }
}

getCurrentTimeInUSTimeZone();

app.get('/',(re,res)=>{
    res.send('Working!!!')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})