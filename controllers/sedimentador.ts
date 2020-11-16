import ActuadorController from './actuador';
import modelsedimentador from '../models/sedimentaror';
const data = require("../../assets/data.json");


export default class SedimentadorController {

    static async getSedimentatores(){
        let location="sedimentador";

        let flo1= await ActuadorController.CheckActuador(data.sedimentador_1.actuador,data.sedimentador_1.posicion,data.sedimentador_1.tipo,location,"entrada","1");
        let flo2= await ActuadorController.CheckActuador(data.sedimentador_2.actuador,data.sedimentador_2.posicion,data.sedimentador_2.tipo,location,"entrada","2");
        let flo3= await ActuadorController.CheckActuador(data.sedimentador_3.actuador,data.sedimentador_3.posicion,data.sedimentador_3.tipo,location,"entrada","3");    


    }


}