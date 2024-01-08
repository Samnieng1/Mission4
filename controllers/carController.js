const Car = require('../models/Car');

//to Get all cars
exports.getCars = async(req, res) => {
    try{
        const prod = await Car.find({});
    res.json({cars: prod});
    }
    catch (err){
        res.json({error: 'Something wen wrong'});
    }
    
}

//get single car from the database
exports.getSingleCar = async (req, res) =>{
    const carId = req.params.id; //id is same name as id in the cars.js the route
    const prod = await Car.findById(carId);
    if(prod){
        res.json({prod});
    }
    else{
        res.json('Product not found')
    }
    
}


exports.createCar = async(req, res) =>{
    const product = await Car.create(req.body);
    if (product){
        res.status(200).json({
            success: true,
            product: product
        })
    }
}


