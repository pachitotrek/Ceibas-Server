
export const SERVER_PORT:number = 5000;
// export const DBURL:string = 'mongodb://ceibasAdmin:0laXWXRdq0t2V3Nap9ZV@178.128.235.187:27017/ceibas';
export const DBURL:string = 'mongodb://localhost:27017/ceibas';
export const CADUCIDAD_TOKEN:number=Number(process.env.CADUCIDAD_TOKEN) ||60*60*24*30;
export const SEED:string= process.env.SEED || 'este-es-el-seed-desarrollo';
export const CLIENT_ID:string='416899597802-5nf0egipotbr8argtcqok3mpdk2ref2d.apps.googleusercontent.com'; 


export const DNS:string="DSN=ClearSCADAODBC";


//========================
//entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 


