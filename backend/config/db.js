const mongoose = require('mongoose');
const env = require('dotenv').config()

let connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGODBURL)
    }catch (err){
        throw err;
    }
}
module.exports = connection;