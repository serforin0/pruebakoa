import Router from "koa-router";

import  { allMovies } from "../resources/movies";

export const router = new Router();

router.get('/movies', allMovies );
router.get('/pro', async (ctx) => {
    ctx.body = 'hello world' ;
   
});

// router.get('/gv', async (ctx, next) => {
//     movies.allMovies();
//     await next();
// });


