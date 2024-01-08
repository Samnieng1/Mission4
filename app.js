//import packages
const express = require('express');
const morgan = require('morgan'); //to help with console log output
const cors = require('cors'); //middleware name cors to share resources across origins
const db = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');


//Load the config.env file
dotenv.config({path: './config/config.env'});



//connect to Database
db();

//create an Express app called app
const app = express();

//const port = 5000;
//Middlewares

app.use(express.json()); //body in json formate
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(cors());
//default route
//app.get('/', (req,  res) =>{
   // console.log('Got the request from default route')
    //res.send('Hello World');
//})

//set Static Folder path
app.use(express.static(path.join(__dirname, 'public')));

//Load Routes
const carRoute = require('./routes/cars');
app.use('/api/v1/cars', carRoute);

//define PORT variable to store the port number
const PORT = process.env.PORT || 5000;
//start the server
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})