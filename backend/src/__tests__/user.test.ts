import { User } from '../models/User';

test('it should be able to create a new user', () => {
    const user = new User({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
    });

    expect(user.username).toBe('testuser');
    expect(user.email).toBe('testuser@example.com');
    expect(user.password).toBe('password123');
});
