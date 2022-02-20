import koa from 'koa';
//import cors from '@koa/cors';
 import bodyParser from 'koa-bodyparser';
// import logger from "koa-logger";
// import json from "koa-json";
import dotenv from 'dotenv';
import { dbConn } from './data/index';
import router  from './routes/index';

dotenv.config();
const app = new koa();

dbConn(); 

const PORT:string = process.env.PORT || `4700`;


//router
app.use(router.allowedMethods());
app.use(router.routes());


app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(json());
// app.use(logger);
const server = app.listen(PORT, () => 
    console.log(`server esta escuchando en puerto ${PORT}`),
);

app.use(async (ctx) => (ctx.body = { msg: 'Wolcome to this API.'}));

export = server;

