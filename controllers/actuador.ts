import QueryController from './query';
import modelActuador from '../models/actuador';
import { Request, Response } from 'express';
import { rejects } from 'assert';


export default class ActuadorController {

    static async get(id: number, idp: number,idt:number) {

        let query = `SELECT TOP(1)* FROM CVariableLong WHERE ID=${id} ORDER BY ID DESC`;
        let query2 = `SELECT TOP(1)* FROM CDBPOINT WHERE ID=${idp} ORDER BY ID DESC`;
        let query3 = `SELECT TOP(1)* FROM CVariableByte WHERE ID=${idt} ORDER BY ID DESC`;

        let body = await QueryController.get(query).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return false;
        });

        let bodyp = await QueryController.get(query2).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return false;
        });

        let bodyt = await QueryController.get(query3).then((data: any) => {
            return data;
        }).catch((error: any) => {
            console.log("ERROR AQUI");
            return false;
        });

        if (!body) {
            body = [];
        }
        if (!bodyp) {
            bodyp = [];
        }
        if (!bodyt) {
            bodyt = [];
        }

        let { Value, LastUpdated } = body[0];
        let { CurrentValueAsReal } = bodyp[0];
        let tipo = bodyt[0].Value;    
        
        let f = LastUpdated.split(" ");
        let g = f[1].split(".");
        let y= f[0].split("/");

        let fecha_nodate =`${y[2]}-${y[1]}-${y[0]}T${g[0]}.235Z`;

        let fecha = new Date(fecha_nodate);       


        let a = {
            status: Value,
            time: fecha,
            posicion: CurrentValueAsReal,
            tipo:tipo
        };
        return a;

    }
    static async create(tipo: any,location: any, categoria: any, numero: any) {

        return new Promise((resolve,reject)=>{
            let a = new modelActuador({
                status:0,
                time:"",
                posicion:"",
                tipo,
                location,
                categoria,
                numero
            });
            a.save((error: any, data: any) => {
                if (error) {
                   reject(false);
                }
                if (data) {
                    resolve(data);
                }
            });
        }) ;

    }
    static async getActuador(location: any, categoria: any, numero: any) {
        return new Promise((resolve, reject) => {

            let query = { location: location, categoria: categoria, numero: numero };

            modelActuador.find(query).limit(1).exec((error: any, data: any) => {
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
    static async updateActuador(_id: any, datos: any) {
        return new Promise((resolve, reject) => {

            let { status, time, posicion,tipo } = datos;

            modelActuador.updateOne({ _id }, {
                $set: {
                    status: status,
                    time: time,
                    posicion: posicion,
                    tipo
                }
            }).exec((error: any, data: any) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(data);
                }
            });
        });
    }

    static async CheckActuador(idAct: any, pos: any,tipo:any ,location: any, categoria: any, numero: any) {

        return new Promise(async (resolve, reject) => {
            let A = await ActuadorController.get(idAct, pos,tipo);
            let B: any = await ActuadorController.getActuador(location, categoria, numero);

            if (!A) {
                reject(false);
            }
            if (!B) {
                B = await ActuadorController.create("",location,categoria,numero);
            }
           
            if (A.status != B.status) {
                let C = await ActuadorController.updateActuador(B._id, A);
                resolve(true);
            } else if (A.posicion != B.posicion) {
                let C = await ActuadorController.updateActuador(B._id, A);
                resolve(true)
            } else {             
                resolve(true);
            }
        });
    }











}