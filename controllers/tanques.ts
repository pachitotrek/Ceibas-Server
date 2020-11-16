import PuntoController from './point';
import ActuadorController from './actuador';
import modelTanque from '../models/tanques';
const data = require("../../assets/data.json");


export default class TanquesController {

    static async getTanques(){

        let location="tanques";
     
        let uno_cloro=await PuntoController.get(data.tanques_uno.cloro,location,"cloro","1");
        let uno_ph= await PuntoController.get(data.tanques_uno.ph,location,"ph","1");
        let uno_nivel= await PuntoController.get(data.tanques_uno.nivel,location,"nivel","1");
        
        let dos_cloro=await PuntoController.get(data.tanques_dos.cloro,location,"cloro","2");
        let dos_ph= await PuntoController.get(data.tanques_dos.ph,location,"ph","2");
        let dos_nivel= await PuntoController.get(data.tanques_dos.nivel,location,"nivel","2");   
        
        let tres_cloro=await PuntoController.get(data.tanques_tres.cloro,location,"cloro","3");
        let tres_ph= await PuntoController.get(data.tanques_tres.ph,location,"ph","3");
        let tres_nivel= await PuntoController.get(data.tanques_tres.nivel,location,"nivel","3");   
        
        let cuatro_cloro=await PuntoController.get(data.tanques_cuatro.cloro,location,"cloro","4");
        let cuatro_ph= await PuntoController.get(data.tanques_cuatro.ph,location,"ph","4");
        let cuatro_nivel= await PuntoController.get(data.tanques_cuatro.nivel,location,"nivel","4");   
        
        let cinco_cloro=await PuntoController.get(data.tanques_cinco.cloro,location,"cloro","5");
        let cinco_ph= await PuntoController.get(data.tanques_cinco.ph,location,"ph","5");
        let cinco_nivel= await PuntoController.get(data.tanques_cinco.nivel,location,"nivel","5");   
        
        let uno_actuador = await ActuadorController.CheckActuador(data.tanques_salidas.uno,data.tanques_salidas.pos_uno,data.tanques_salidas.tipo_uno,location,"actuador","1");         
        let dos_actuador = await ActuadorController.CheckActuador(data.tanques_salidas.dos,data.tanques_salidas.pos_dos,data.tanques_salidas.tipo_dos,location,"actuador","2");         
        let tres_actuador = await ActuadorController.CheckActuador(data.tanques_salidas.tres,data.tanques_salidas.pos_tres,data.tanques_salidas.tipo_tres,location,"actuador","3");         
    }



}