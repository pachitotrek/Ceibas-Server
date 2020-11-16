import { Request, Response } from "express";
import { DNS } from "../global/environment";
const odbc = require('odbc');




export default class QueryController {

    static async query(query:any, res: Response) {

        // or using a configuration object
        const connectionConfig = {
            connectionString: DNS,
            connectionTimeout: 50,
            loginTimeout: 50,
        }     

        odbc.connect(connectionConfig, (error: any, connection: any) => {
            if (error) {
                console.log(error)
            }

            if (connection) {
                connection.query(query, (error: any, result: any) => {
                    if (error) { console.error(error) }

                    if (result) {
                        return res.status(200).json({
                            ok: true,
                            result
                        })
                    }

                });
            }
        });
    }

    static async get(query:any){

        const connectionConfig = {
            connectionString: DNS,
            connectionTimeout: 10,
            loginTimeout: 10,
        }     

        return new Promise( (resolve:any,reject:any)=>{
            odbc.connect(connectionConfig, (error: any, connection: any) => {
                if (error) {  
                    console.log(error);                
                    reject( error );
                }
    
                if (connection) {
                    connection.query(query, (error: any, result: any) => {
                        if (error) {                             
                            console.log(error);
                            reject( false );
                         }
    
                        if (result) {                      
                            resolve( result ); 
                        }    
                    });
                }
            });
        });
    }





}