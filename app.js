const express = require('express');
const app = express();
const path = require('path')

const indexRouter = require('./routes/index');
const blockRouter = require('./routes/block');
const txRouter = require('./routes/tx');
const addressRouter = require('./routes/address');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + "/public"));
app.use('/', indexRouter);
app.use('/block', blockRouter);
app.use('/tx', txRouter);
app.use('/address', addressRouter);


app.listen(3000, function(){
    console.log('3000port start...')
});


