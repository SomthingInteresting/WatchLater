import { Movie } from '../models/Movie';

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
