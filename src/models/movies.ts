import { Schema, model } from 'mongoose';


interface Movies {
    // id: number;
    movie: string;
    author: string;
    year: string;
    createdAt: Date;
    updatedAt: Date;
}

const schema = new Schema<Movies>(
    {
        // id: { type: Number, required: false},
        movie: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: String, required: true },
        
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: true},
);

const moviesModel = model<Movies>('Movies', schema);

export default moviesModel;