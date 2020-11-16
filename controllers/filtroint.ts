import ActuadorController from "./actuador";
import PuntoController from "./point";
import modelfiltro from '../models/filtros_int';
const data = require("../../assets/data.json");


export default class FiltrosInterioresController {


    static async getFiltrosInteriores() {

        //===============Actuadores====================
        //1.================Entrada=================
        let uno_entrada = await ActuadorController.CheckActuador(data.filtro_int_1.entrada,data.filtro_int_1.posicion_ent,data.filtro_int_1.tipo_ent, "interior", "entrada", 1);
        let dos_entrada = await ActuadorController.CheckActuador(data.filtro_int_2.entrada,data.filtro_int_2.posicion_ent,data.filtro_int_2.tipo_ent, "interior", "entrada", 2);
        let tres_entrada = await ActuadorController.CheckActuador(data.filtro_int_3.entrada,data.filtro_int_3.posicion_ent,data.filtro_int_3.tipo_ent, "interior", "entrada", 3);
        let cuatro_entrada = await ActuadorController.CheckActuador(data.filtro_int_4.entrada,data.filtro_int_4.posicion_ent,data.filtro_int_4.tipo_ent, "interior", "entrada", 4);
        let cinco_entrada = await ActuadorController.CheckActuador(data.filtro_int_5.entrada,data.filtro_int_5.posicion_ent,data.filtro_int_5.tipo_ent, "interior", "entrada", 5);
        let seis_entrada = await ActuadorController.CheckActuador(data.filtro_int_6.entrada,data.filtro_int_6.posicion_ent,data.filtro_int_6.tipo_ent, "interior", "entrada", 6);
        //2.=============Desague===========================
        let uno_desague = await ActuadorController.CheckActuador(data.filtro_int_1.desague,data.filtro_int_1.posicion_desague,data.filtro_int_1.tipo_desague, "interior", "desague", 1);
        let dos_desague = await ActuadorController.CheckActuador(data.filtro_int_2.desague,data.filtro_int_2.posicion_desague,data.filtro_int_2.tipo_desague, "interior", "desague", 2);
        let tres_desague = await ActuadorController.CheckActuador(data.filtro_int_3.desague,data.filtro_int_3.posicion_desague,data.filtro_int_3.tipo_desague, "interior", "desague", 3);
        let cuatro_desague = await ActuadorController.CheckActuador(data.filtro_int_4.desague,data.filtro_int_4.posicion_desague,data.filtro_int_4.tipo_desague, "interior", "desague", 4);
        let cinco_desague = await ActuadorController.CheckActuador(data.filtro_int_5.desague,data.filtro_int_5.posicion_desague,data.filtro_int_5.tipo_desague, "interior", "desague", 5);
        let seis_desague = await ActuadorController.CheckActuador(data.filtro_int_6.desague,data.filtro_int_6.posicion_desague,data.filtro_int_6.tipo_desague, "interior", "desague", 6);
        //3.===========Efluentes========================== 
        //Derecho
        let uno_efld = await ActuadorController.CheckActuador(data.filtro_int_1.efluente_d,data.filtro_int_1.posicion_efld,data.filtro_int_1.tipo_efld, "interior", "efluente.der", 1);
        let dos_efld = await ActuadorController.CheckActuador(data.filtro_int_2.efluente_d,data.filtro_int_2.posicion_efld,data.filtro_int_2.tipo_efld, "interior", "efluente.der", 2);
        let tres_efld = await ActuadorController.CheckActuador(data.filtro_int_3.efluente_d,data.filtro_int_3.posicion_efld,data.filtro_int_3.tipo_efld, "interior", "efluente.der", 3);
        let cuatro_efld = await ActuadorController.CheckActuador(data.filtro_int_4.efluente_d,data.filtro_int_4.posicion_efld,data.filtro_int_4.tipo_efld, "interior", "efluente.der", 4);
        let cinco_efld = await ActuadorController.CheckActuador(data.filtro_int_5.efluente_d,data.filtro_int_5.posicion_efld,data.filtro_int_5.tipo_efld, "interior", "efluente.der", 5);
        let seis_efld = await ActuadorController.CheckActuador(data.filtro_int_6.efluente_d,data.filtro_int_6.posicion_efld,data.filtro_int_6.tipo_efld, "interior", "efluente.der", 6);
        //Izquierdo
        let uno_efli = await ActuadorController.CheckActuador(data.filtro_int_1.efluente_i,data.filtro_int_1.posicion_efli,data.filtro_int_1.tipo_efli, "interior", "efluente.izq", 1);
        let dos_efli = await ActuadorController.CheckActuador(data.filtro_int_2.efluente_i,data.filtro_int_2.posicion_efli,data.filtro_int_2.tipo_efli, "interior", "efluente.izq", 2);
        let tres_efli = await ActuadorController.CheckActuador(data.filtro_int_3.efluente_i,data.filtro_int_3.posicion_efli,data.filtro_int_3.tipo_efli, "interior", "efluente.izq", 3);
        let cuatro_efli = await ActuadorController.CheckActuador(data.filtro_int_4.efluente_i,data.filtro_int_4.posicion_efli,data.filtro_int_4.tipo_efli, "interior", "efluente.izq", 4);
        let cinco_efli = await ActuadorController.CheckActuador(data.filtro_int_5.efluente_i,data.filtro_int_5.posicion_efli,data.filtro_int_5.tipo_efli, "interior", "efluente.izq", 5);
        let seis_efli = await ActuadorController.CheckActuador(data.filtro_int_6.efluente_i,data.filtro_int_6.posicion_efli,data.filtro_int_6.tipo_efli, "interior", "efluente.izq", 6);
        //4.===========Lavados========================== 
        //Derecho
        let uno_lavd = await ActuadorController.CheckActuador(data.filtro_int_1.lavado_d,data.filtro_int_1.posicion_ld,data.filtro_int_1.tipo_ld, "interior", "lavado.der", 1);
        let dos_lavd = await ActuadorController.CheckActuador(data.filtro_int_2.lavado_d,data.filtro_int_2.posicion_ld,data.filtro_int_2.tipo_ld, "interior", "lavado.der", 2);
        let tres_lavd = await ActuadorController.CheckActuador(data.filtro_int_3.lavado_d,data.filtro_int_3.posicion_ld,data.filtro_int_3.tipo_ld, "interior", "lavado.der", 3);
        let cuatro_lavd = await ActuadorController.CheckActuador(data.filtro_int_4.lavado_d,data.filtro_int_4.posicion_ld,data.filtro_int_4.tipo_ld, "interior", "lavado.der", 4);
        let cinco_lavd = await ActuadorController.CheckActuador(data.filtro_int_5.lavado_d,data.filtro_int_5.posicion_ld,data.filtro_int_5.tipo_ld, "interior", "lavado.der", 5);
        let seis_lavd = await ActuadorController.CheckActuador(data.filtro_int_6.lavado_d,data.filtro_int_6.posicion_ld,data.filtro_int_6.tipo_ld, "interior", "lavado.der", 6);
        // //Izquierdo
        let uno_lavi = await ActuadorController.CheckActuador(data.filtro_int_1.lavado_i,data.filtro_int_1.posicion_li,data.filtro_int_1.tipo_li, "interior", "lavado.izq", 1);
        let dos_lavi = await ActuadorController.CheckActuador(data.filtro_int_2.lavado_i,data.filtro_int_2.posicion_li,data.filtro_int_2.tipo_li, "interior", "lavado.izq", 2);
        let tres_lavi = await ActuadorController.CheckActuador(data.filtro_int_3.lavado_i,data.filtro_int_3.posicion_li,data.filtro_int_3.tipo_li, "interior", "lavado.izq", 3);
        let cuatro_lavi = await ActuadorController.CheckActuador(data.filtro_int_4.lavado_i,data.filtro_int_4.posicion_li,data.filtro_int_4.tipo_li, "interior", "lavado.izq", 4);
        let cinco_lavi = await ActuadorController.CheckActuador(data.filtro_int_5.lavado_i,data.filtro_int_5.posicion_li,data.filtro_int_5.tipo_li, "interior", "lavado.izq", 5);
        let seis_lavi = await ActuadorController.CheckActuador(data.filtro_int_6.lavado_i,data.filtro_int_6.posicion_li,data.filtro_int_6.tipo_li, "interior", "lavado.izq", 6);
        //4.===========Sopladores========================== 
        //Derecho
        let uno_sopld = await ActuadorController.CheckActuador(data.filtro_int_1.soplador_d,data.filtro_int_1.posicion_sd,data.filtro_int_1.tipo_sd, "interior", "sopla.der", 1);
        let dos_sopld = await ActuadorController.CheckActuador(data.filtro_int_2.soplador_d,data.filtro_int_2.posicion_sd,data.filtro_int_2.tipo_sd, "interior", "sopla.der", 2);
        let tres_sopld = await ActuadorController.CheckActuador(data.filtro_int_3.soplador_d,data.filtro_int_3.posicion_sd,data.filtro_int_3.tipo_sd, "interior", "sopla.der", 3);
        let cuatro_sopld = await ActuadorController.CheckActuador(data.filtro_int_4.soplador_d,data.filtro_int_4.posicion_sd,data.filtro_int_4.tipo_sd, "interior", "sopla.der", 4);
        let cinco_sopld = await ActuadorController.CheckActuador(data.filtro_int_5.soplador_d,data.filtro_int_5.posicion_sd,data.filtro_int_5.tipo_sd, "interior", "sopla.der", 5);
        let seis_sopld = await ActuadorController.CheckActuador(data.filtro_int_6.soplador_d,data.filtro_int_6.posicion_sd,data.filtro_int_6.tipo_sd, "interior", "sopla.der", 6);
        //Izquierdo
        let uno_sopli = await ActuadorController.CheckActuador(data.filtro_int_1.soplador_i,data.filtro_int_1.posicion_si,data.filtro_int_1.tipo_si, "interior", "sopla.izq", 1);
        let dos_sopli = await ActuadorController.CheckActuador(data.filtro_int_2.soplador_i,data.filtro_int_2.posicion_si,data.filtro_int_2.tipo_si, "interior", "sopla.izq", 2);
        let tres_sopli = await ActuadorController.CheckActuador(data.filtro_int_3.soplador_i,data.filtro_int_3.posicion_si,data.filtro_int_3.tipo_si, "interior", "sopla.izq", 3);
        let cuatro_sopli = await ActuadorController.CheckActuador(data.filtro_int_4.soplador_i,data.filtro_int_4.posicion_si,data.filtro_int_4.tipo_si, "interior", "sopla.izq", 4);
        let cinco_sopli = await ActuadorController.CheckActuador(data.filtro_int_5.soplador_i,data.filtro_int_5.posicion_si,data.filtro_int_5.tipo_si, "interior", "sopla.izq", 5);
        let seis_sopli = await ActuadorController.CheckActuador(data.filtro_int_6.soplador_i,data.filtro_int_6.posicion_si,data.filtro_int_6.tipo_si, "interior", "sopla.izq", 6);

        let location="interior";

        let general = await PuntoController.get(data.filtros_interiores.nivel,location,"nivel","0");

        let uno_nivel = await PuntoController.get(data.filtro_int_1.nivel,"interior","nivel","1");
        let uno_turbiedad = await PuntoController.get(data.filtro_int_1.turbiedad,"interior","turbiedad","1");
        let dos_nivel= await PuntoController.get(data.filtro_int_2.nivel,location,"nivel","2");
        let dos_turbiedad= await PuntoController.get(data.filtro_int_2.turbiedad,location,"turbiedad","2");
   
        let tres_nivel= await PuntoController.get(data.filtro_int_3.nivel,location,"nivel","3");
        let tres_turbiedad= await PuntoController.get(data.filtro_int_3.turbiedad,location,"turbiedad","3"); 

        let cuatro_nivel= await PuntoController.get(data.filtro_int_4.nivel,location,"nivel","4");
        let cuatro_turbiedad= await PuntoController.get(data.filtro_int_4.turbiedad,location,"turbiedad","4");
 
        let cinco_nivel= await PuntoController.get(data.filtro_int_5.nivel,location,"nivel","5");
        let cinco_turbiedad= await PuntoController.get(data.filtro_int_5.turbiedad,location,"turbiedad","5"); 
     
        let seis_nivel= await PuntoController.get(data.filtro_int_6.nivel,location,"nivel","6");
        let seis_turbiedad= await PuntoController.get(data.filtro_int_6.turbiedad,location,"nivel","6");
    
    }


}
