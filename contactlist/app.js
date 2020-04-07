// importing modules
var express = require ('express');
var mongoose = require ('mongoose');
var bodyparser = require ('body-parser');
var cors = require('cors');
var path = require ('path');

var app = express();

const route =require('./routes/route');

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to database @27017");
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error while connecting to database:'+err);
    }   
});

//port number
const port =3000;

//using middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('Ankur Shrivastava');
});
app.listen(port,()=>{
    console.log("server started at port :",port);
});