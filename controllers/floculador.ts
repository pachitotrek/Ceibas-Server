import ActuadorController from './actuador';
import modelfloculador from '../models/floculador';
import PuntoController from './point';
const data = require("../../assets/data.json");


export default class FloculadorController {

    static async getFloculadores(){

        let location="floculador";


        let turb= await PuntoController.get(data.floculadores.turbiedad,location,"turbiedad","0");
        let flo1= await ActuadorController.CheckActuador(data.floculador_1.actuador,data.floculador_1.posicion,data.floculador_1.tipo,location,"entrada","1");
        let flo2= await ActuadorController.CheckActuador(data.floculador_2.actuador,data.floculador_2.posicion,data.floculador_2.tipo,location,"entrada","2");
        let flo3= await ActuadorController.CheckActuador(data.floculador_3.actuador,data.floculador_3.posicion,data.floculador_3.tipo,location,"entrada","3");
        let flo4= await ActuadorController.CheckActuador(data.floculador_4.actuador,data.floculador_4.posicion,data.floculador_4.tipo,location,"entrada","4");

    }



}