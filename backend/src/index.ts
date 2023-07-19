import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

if (!process.env.DB_URL_PROD || !process.env.DB_URL_TEST) {
    throw new Error("Both DB_URL_PROD and DB_URL_TEST must be defined");
}

// Connect to MongoDB
mongoose.connect(process.env.NODE_ENV === 'test' ? process.env.DB_URL_TEST : process.env.DB_URL_PROD)
  .then(() => {
    console.log('Connected to the database');
  }).catch((error) => {
    console.error('Error connecting to the database', error);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
