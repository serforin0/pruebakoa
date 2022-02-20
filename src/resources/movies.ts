//import { Context } from 'koa';
//import moviesModule from 'src/models/movies';
import { Context } from 'koa';
//import fetch from 'node-fetch';
import request from 'request';



const allMovies = async (ctx: Context, data: any) => {
     
        request.get('http://www.omdbapi.com/?i=tt3896198&apikey=ad993c69', {json:true},
            async function(err, r) {
                if(err) {
                    console.log(err);
                }else {
                    //console.log(r.body);
                    ctx.body = { msg: 'hello world' };
                    data = r.body;
                    const cursor = await r.body.find();
                    return cursor.toArray();
                    // ctx.json(r.body);
                }
                console.log(data);
            }
        )
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ad993c69')
        // .then(res => res.json())
        // .then(json => {
        //     console.log("Title:");
        //     console.log(json.Title);
        //     return  json;
        
        // })
        
        
}
    

    export { allMovies };
