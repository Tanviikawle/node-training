const newDate1 = Date.now();

const newDate2 = new Date();

//Creating new date by specifying values (year,month,day,hour,day,hour,minute,seconds,millisecond)
let d = new Date(2018,11,24,10,33,30,0);

//Javascript counts months from 0 to 11
//Specifying moth higher than 11, will not result in an error but add the overflow to the next year:

d = new Date(2018,15,24,10,33,30);

//Is same as:
 
d = new Date(2019,3,24,10,33,30);

//same for month and days.

//Using 6,4,3, OR 2 Numbers

//6 Numbers - year,month,day,hour,minute,second
d = new Date(2018,11,24,10,33,30)

//5 Numbers - year,month,day,hour,minute
d = new Date(2018,11,24,10,33)

//4 Numbers - year,month,day,hour
d = new Date(2018,11,24,10)

//3 Numbers - year,month,day
d = new Date(2018,11,24)

//2 Numbers - year,month
d = new Date(2018,11)
console.log(d.toDateString())
//you cannot omit month. If you supply only one parameter it will bw treated as milliseconds.


console.log(newDate1);
console.log(newDate2);
console.log(d);