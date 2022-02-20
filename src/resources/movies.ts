import { Context } from 'koa';
// import MoviesModel from '../models/movies';
// import { generateToken } from '../function/create_token';
// import { encrypt } from '../function/secure_data';
//import R from 'ramda';

type MoviesInput = {
    movie: string;
    author: string;
    year: string;
};

const addMovies = async (ctx: Context) => {
    console.log(ctx.request.body);
    const { movie, author, year } = ctx.request.body as MoviesInput;

    console.log(movie, author, year);
    const token = 'test';
    ctx.status = 201;
    ctx.body = { token };
};

export { addMovies };