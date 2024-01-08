//this file is to seed data to MongoDB
const dotenv = require('dotenv');
const fs = require('fs'); //file system to read the file
const colors = require('colors'); //to color the output in the colnsole
const db = require('./config/db');

//Load ENV variables
dotenv.config({path: './config/config.env'});

//Load Models
const Car = require('./models/Car');

//Connect to Mongo Database
db().then();

//Read the JSON files

const cars = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/cars.json`, 'utf-8'));
//console.log(cars);

//Import Sample Data in DB
const importData = async () => {
    try {
        await Car.create(cars);
        console.log(`Data successfully imported`.green.inverse);
        process.exit();
    }
    catch (err) {
        console.log(err);
    }
}

//Delete the data from DB
const deleteData = async () => {
    try {
        await Car.deleteMany();
        console.log(`Data successfully deleted`.red.inverse);
        process.exit();
    }
    catch (err) {
        console.log(err);
    }
}

//define which function to be called
if (process.argv[2] === '-i'){
    importData().then();
}
else if (process.argv[2] === '-d'){
    deleteData().then();
}