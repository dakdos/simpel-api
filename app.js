const port          = 4000;
const express       = require('express');
const app           = express();

const router        = require('./src/routers/index');
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv')
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit : '10mb'}))

app.use(router);

app.listen(port, () =>{
    console.log('server running at port '+port)
})