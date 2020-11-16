import QueryController from './query';
import modelPunto from '../models/point';

export interface punto{
    value: Number,
    alarma: String,
    time: String,
    severidad: String,
    cero: Number,
    tope: Number,
    actual: String,
    anterior: String,
    location:String,
    categoria:String,
    numero:String
};


export default class PuntoController {

    static async get(id: number,location:string,categoria:string,numero:string) {

        let query = `SELECT TOP(1) CDBPOINT.CurrentTime,CDBPOINT.AlarmState,CDBPOINT.AlarmSeverity,
        CDBPOINT.CurrentValueAsReal,CDBPOINT.CurrentValueFormatted,CDBPOINT.PreviousValueFormatted,CPOINTALG.ZeroScale,
        CPOINTALG.FullScale FROM CDBPOINT INNER JOIN CPOINTALG ON CDBPOINT.id = CPOINTALG.id WHERE CDBPOINT.id=${id}`;

        let body = await QueryController.get(query).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return false;
        });          
        
        
        if (!body) {

            let a = {
                value: null,
                time: null,
                quality: null
            };

            return a;

        } else {

            let pt:any= await PuntoController.getPunto(location,categoria,numero);
            let punto = -1;

            if(pt){
                punto= pt.value;
            }      

            let { CurrentValueAsReal, CurrentTime, AlarmState, AlarmSeverity, ZeroScale, FullScale, CurrentValueFormatted, PreviousValueFormatted } = body[0];

            let f = CurrentTime.split(" ");
            let g = f[1].split(".");
            let y= f[0].split("/");
    
            let fecha_nodate =`${y[2]}-${y[1]}-${y[0]}T${g[0]}.235Z`;
    
            let fecha = new Date(fecha_nodate);       
    

            if(CurrentValueAsReal != punto ){
                let a = new modelPunto({
                    value: CurrentValueAsReal,
                    time: fecha,
                    alarma: AlarmState,
                    severidad: AlarmSeverity,
                    cero: ZeroScale,
                    tope: FullScale,
                    actual: CurrentValueFormatted,
                    anterior: PreviousValueFormatted,             
                    location:location,
                    categoria:categoria,
                    numero:numero
                });

                a.save((error:any,data:any)=>{
                    if(error){
                        return false;
                    }
                    if(data){                                  
                        return true;
                    }                  
                });
            }else{
              
                let a = false;
                return a;                
            }
        }


    }

    static async getPunto(location: any, categoria: any, numero: any) {
        return new Promise((resolve, reject) => {

            let query = { location: location, categoria: categoria, numero: numero };

            modelPunto.find(query).limit(1).sort({"_id":-1}).sort({"time":-1}).exec((error: any, data: any) => {
                if (error) {
                    console.log("error");
                    reject(false);
                }
                if (!data) {
                    resolve(false);
                }
                if (data) {
                    resolve(data[0])
                }
            });
        });
    }
    static async getPuntoApoyo(id: number,location:string,categoria:string,numero:string){

        let query = `SELECT TOP(1) CurrentTime,AlarmState,AlarmSeverity,
        CurrentValueAsReal,CurrentValueFormatted,PreviousValueFormatted FROM CDBPOINT WHERE id=${id}`;

        let body = await QueryController.get(query).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return false;
        });   

          
        if (!body) {

            let a = {
                value: null,
                time: null,
                quality: null
            };

            return a;

        } else {

            let pt:any= await PuntoController.getPunto(location,categoria,numero);
            let punto = -1;

            if(pt){
                punto= pt.value;
            }      

            let { CurrentValueAsReal, CurrentTime, AlarmState, AlarmSeverity,CurrentValueFormatted, PreviousValueFormatted } = body[0];

            let f = CurrentTime.split(" ");
            let g = f[1].split(".");
            let y= f[0].split("/");
    
            let fecha_nodate =`${y[2]}-${y[1]}-${y[0]}T${g[0]}.235Z`;
    
            let fecha = new Date(fecha_nodate);       
    

            if(CurrentValueAsReal != punto ){
                let a = new modelPunto({
                    value: CurrentValueAsReal,
                    time: fecha,
                    alarma: AlarmState,
                    severidad: AlarmSeverity,                   
                    actual: CurrentValueFormatted,
                    anterior: PreviousValueFormatted,             
                    location:location,
                    categoria:categoria,
                    numero:numero
                });

                a.save((error:any,data:any)=>{
                    if(error){
                        return false;
                    }
                    if(data){                                  
                        return true;
                    }                  
                });
            }else{
              
                let a = false;
                return a;                
            }
        }

    }
 



}