import mongoose from 'mongoose'
import config from '../configurations'

export default function databaseConnect() {
    mongoose.connect(config.DatabaseUrl, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        dbName: config.DatabaseName
    }).catch(error => {
        console.log("Falha ao conectar no banco")
        throw Error("Falha ao conectar no banco");
    });  
}

