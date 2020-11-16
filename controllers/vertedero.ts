import PuntoController from './point';
import ActuadorController from './actuador';
import modelvertedero from '../models/vertedero';
const data = require("../../assets/data.json");


export default class VertederoController {

    static async getVertedero(){
        let location="vertedero";
        let numero ="1";
        let caudal=await PuntoController.get(data.vertedero.caudal,location,"caudal",numero);
        let nivel= await PuntoController.get(data.vertedero.nivel,location,"nivel",numero);
        let temperatura= await PuntoController.get(data.vertedero.temperatura,location,"temperatura",numero);
        let conductividad= await PuntoController.get(data.vertedero.conductividad,location,"conductividad",numero);
        let ph= await PuntoController.get(data.vertedero.ph,location,"ph",numero);
        let turbiedad_alta= await PuntoController.get(data.vertedero.turbiedad_alta,location,"turbiedad-alta",numero);
        let turbiedad_baja= await PuntoController.get(data.vertedero.turbiedad_baja,location,"turbiedad-baja",numero);        
        let actuador = await ActuadorController.CheckActuador(data.vertedero.actuador,data.vertedero.posicion,data.vertedero.tipo,location,"entrada",1);           
    }



}