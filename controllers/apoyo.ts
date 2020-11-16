import ActuadorController from "./actuador";
import PuntoController from "./point";
import modelfiltro from '../models/filtros_int';
const data = require("../../assets/data.json");

export default class ApoyoController{

    static async servicioApoyo(){
        let location ="tanque-exterior";
        let tanque_act= await ActuadorController.CheckActuador(data.tanque_exterior.actuador,data.tanque_exterior.pos_actuador,data.tanque_exterior.tipo_actuador,location,"actuador","0");
        let tanque_nivel = await PuntoController.get(data.tanque_exterior.nivel,location,"nivel","0");
        let tanque_bomba = await PuntoController.getPuntoApoyo(data.tanque_exterior.bomba_out1,location,"bomba-out","1");
        let tanque_bomba_dos = await PuntoController.getPuntoApoyo(data.tanque_exterior.bomba_out2,location,"bomba-out","2");
        let tanque_reset = await PuntoController.getPuntoApoyo(data.tanque_exterior.reset,location,"reset","0");
        let tanque_set = await PuntoController.getPuntoApoyo(data.tanque_exterior.set,location,"set","0");
        
        let location2="aire";
        let aire_act= await ActuadorController.CheckActuador(data.aire.actuador,data.aire.pos_actuador,data.aire.tipo_actuador,location2,"actuador","0"); 
        let aire_control_uno = await PuntoController.getPuntoApoyo(data.tanque_exterior.bomba_out1,location2,"control","1");
        let aire_control_dos = await PuntoController.getPuntoApoyo(data.tanque_exterior.bomba_out1,location2,"control","2");
        let aire_control_tres = await PuntoController.getPuntoApoyo(data.tanque_exterior.bomba_out1,location2,"control","3");

    }




}

