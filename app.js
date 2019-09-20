const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const blockRouter = require('./routes/block');

app.use('/', indexRouter);
app.use('/block', blockRouter);
app.use('/public', express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log('3000port start...')
});
