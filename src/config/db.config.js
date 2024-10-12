const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');

async function connectToDB(){
    try {
        //console.log(ATLAS_DB_URL);
        if(NODE_ENV=="development"){
            await mongoose.connect(ATLAS_DB_URL);
            console.log("MONGO DB connected");
        }
    } catch (error) {
        console.log('Unable to connnect to the DB server');
        console.log(error);
    }
}

module.exports=connectToDB;