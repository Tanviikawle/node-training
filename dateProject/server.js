const express = require('express');
const app = express();

//Using Intl.DateTimeFormat
const timeZones = [
    'GMT',
    'Europe/Madrid',
    'Asia/Tokyo',
    'Europe/Vienna',
    'Indian/Cocos'
];

function getTimeZones(){
    const timestamp = new Date();
    let displayDate;
    let times = ''
    for(time in timeZones){
        displayDate = Intl.DateTimeFormat('en-GB',{
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            // hour12: false,
            timeZone : timeZones[time]
        }).format(timestamp);
        times += displayDate ;
        times += '\n';
    }
    console.log(times);
    return times;
}

app.get('/',(re,res)=>{
    const result = getTimeZones();
    res.send(result);
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})