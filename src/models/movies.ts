import { Schema, model } from 'mongoose';


const host = 'http://www.omdbapi.com/?i=tt3896198&apikey=ad993c69'

interface Movies {
    movie: string;
    find: string;
    replace: string;
    createdAt: Date;
    updatedAt: Date;
}

const schema = new Schema<Movies>(
    {
        movie: { type: String, required: true },
        find: { type: String, required: true },
        replace: { type: String, required: false},
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: true},
);

const moviesModule = model<Movies>('Movies', schema);

export default moviesModule;