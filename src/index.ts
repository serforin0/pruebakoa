import koa from 'koa';
//import cors from '@koa/cors';
//import bodyParser from 'koa-bodyparser';
import logger from "koa-logger";
import json from "koa-json";
import dotenv from 'dotenv';
import { dbConn } from './data/index';


import { router } from './routes';

dotenv.config();

const PORT:string = process.env.PORT || `4700`;




const app = new koa();
dbConn(); 


app.use(router.allowedMethods());
app.use(router.routes());
app.use(json());
app.use(logger);
app.listen(PORT, () => {
    console.log(`server esta escuchando en puerto ${PORT}`);
});
