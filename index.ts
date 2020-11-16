import Server from "./classes/server";
import router from "./routes/routes";
import bodyParser from "body-parser";
import express from 'express';
import mongoose from 'mongoose'
import cors from "cors"
import { DBURL } from './global/environment';
import DatosController from "./controllers/datos";

const server = Server.Instance;

mongoose.Promise = global.Promise;

//BodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
server.app.use(express.static(__dirname+'/public'));

//cors

server.app.use( cors() );


server.app.use('/api',router);


mongoose.connect(DBURL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    DatosController.GetDBDatos();
    server.start(()=>{     

        console.log("Servidor inicializado");    
    });
})
.catch( err => console.log(err));


