import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//let user = process.env.USERDB;
//let password = process.env.PASSWORD
//let dbname = process.env.DBNAME

export const dbConn = () => {
    const uri:string = process.env.MONGO_URI || `mongodb+srv://juan:${process.env.PASSWORD}@cluster0.ppt3d.mongodb.net/principal?retryWrites=true&w=majority`;
    console.log(process.env.USERDB)
   const options = {
       autoIndex: false,
       serverSelectionTimeoutMs: 5000,
       socketTimeoutMs: 45000,
       family: 4,
   };
   
    return connect(
    uri, options).then(() => {
        console.log("conectado");
    }).catch((err) => console.log(err))
};