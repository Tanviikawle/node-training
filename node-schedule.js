const schedule = require('node-schedule')

const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const job = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Time for tea!');
});

//Graceful shutdown can be used to stop execution gracefully and it returns a promise.
// process.on('SIGINT' , function(){
//     schedule.gracefulShutdown()
//     .then (()=> process_params.exit(0))
// })


//This will execute scheduled job on specifically given date and time
// const date = new Date(2024, 6, 19, 11, 50, 0);
// let x = 'Tadow!';
// const job2 = schedule.scheduleJob(date, function(y){
//   console.log(y);
// }.bind(null,x));
// x = 'Changing Data';

//Using recurence rule
// const rule = new schedule.RecurrenceRule();
// rule.minute = 42;

// const job3 = schedule.scheduleJob(rule, function(){
//   console.log('The answer to life, the universe, and everything!');
// });

//Using Range function
// const rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0,new schedule.Range(4,6)];
// rule.hour = 17
// rule.minute = 0;

// const job4 = schedule.scheduleJob(rule,function(){
//     console.log('Today is recognized by Rebecca Black!')
// });

//Using Timezones

// const rule = new schedule.RecurrenceRule();
// rule.hour = 0;
// rule.minute = 0;
// rule.tz = 'Etc/UTC';

// const job5 = schedule.scheduleJob(rule, function(){
//   console.log('A new day has begun in the UTC timezone!');
// });