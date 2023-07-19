import { Movie, IMovie } from '../models/Movie';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

describe('Movie Model Test', () => {
    beforeAll(async () => {
      if (!process.env.DB_URL_TEST) {
        throw new Error("DB_URL_TEST must be defined");
    }
      await mongoose.connect(process.env.DB_URL_TEST);
    });      

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await Movie.deleteMany();
    });

    test('it should be able to create a new movie', () => {
        const movie = new Movie({
            title: 'Inception',
            watched: false,
            userId: 'testuserid'
        });

        expect(movie.title).toBe('Inception');
        expect(movie.watched).toBe(false);
        expect(movie.userId).toBe('testuserid');
    });

    it('create & save movie successfully', async () => {
        const movieData = {
            title: 'Inception',
            watched: false,
            userId: 'testuserid'
        };
        const validMovie = new Movie(movieData);
        const savedMovie: IMovie = await validMovie.save();

        expect(savedMovie._id).toBeDefined();
        expect(savedMovie.title).toBe(movieData.title);
        expect(savedMovie.watched).toBe(movieData.watched);
        expect(savedMovie.userId).toBe(movieData.userId);
    });
});
