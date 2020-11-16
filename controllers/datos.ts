import { Request, Response } from "express";
import QueryController from "./query";
import VertederoController from "./vertedero";
import FloculadorController from "./floculador";
import SedimentadorController from "./sedimentador";
import FiltrosExterioresController from "./filtrosext";
import FiltrosInterioresController from "./filtroint";
import TanquesController from "./tanques";
import ApoyoController from "./apoyo";
const data = require("../../assets/data.json");





export default class DatosController{


    static GetDBDatos(){
        setInterval(() => {   
            VertederoController.getVertedero();
            FloculadorController.getFloculadores();
            SedimentadorController.getSedimentatores();
            FiltrosInterioresController.getFiltrosInteriores();
            TanquesController.getTanques();  
            ApoyoController.servicioApoyo();       
        },5000);       
    }


    static getPunto(req:Request,res:Response){

        let id=req.params.id;

        let query=`SELECT TOP(100)* FROM CDBHISTORIC WHERE id=${id}`;

        QueryController.query(query,res);
    }
}