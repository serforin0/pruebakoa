import Router from "@koa/router";
import { addMovies } from '../resources/movies'

const router = new Router({
    prefix: '/movies',
});

router.post('/', addMovies);

export = router;

// import  { allMovies } from "../resources/movies";

// export const router = new Router();

// router.get('/movies', allMovies );
// router.get('/pro', async (ctx) => {
//     ctx.body = 'hello world' ;
   
// });

// // router.get('/gv', async (ctx, next) => {
// //     movies.allMovies();
// //     await next();
// // });


