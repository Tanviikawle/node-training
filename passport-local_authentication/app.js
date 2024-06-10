// var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
const expess = require('express');
const ejsMate = require("ejs-mate");
const path = require("path");

const app = expess();

app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

// app.use('/', indexRouter);
app.use('/', authRouter);

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})



