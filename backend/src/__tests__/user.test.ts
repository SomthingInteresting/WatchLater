import { User, IUser } from '../models/User';
import mongoose from 'mongoose';

describe('User Model Test', () => {
    beforeAll(async () => {
        const url = `mongodb://localhost/WatchLater_test`;
        await mongoose.connect(url);
    });      

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany();
  });

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

  it('create & save user successfully', async () => {
    const userData = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123'
    };
    const validUser = new User(userData);
    const savedUser: IUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).toBe(userData.password);
  });
});
