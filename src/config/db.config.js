const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');
const mongoose = require('mongoose');

async function connectToDB(){
    try{
        if(NODE_ENV === 'development'){
            await mongoose.connect(ATLAS_DB_URL);
            console.log("Connected to the DB");
        }
    }
    catch(error){
        console.log("Unable to connect to the DB server", error);
    }
}

module.exports = connectToDB;