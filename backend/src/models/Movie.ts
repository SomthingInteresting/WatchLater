import mongoose, { Document, Schema } from 'mongoose';

// Define the Movie document structure for TypeScript
export interface IMovie extends Document {
    title: string;
    watched: boolean;
    userId: string;
}

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    watched: { type: Boolean, default: false },
    userId: { type: String, required: true },
});

export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);
