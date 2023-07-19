import { User, IUser } from '../models/User';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

describe('User Model Test', () => {
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
