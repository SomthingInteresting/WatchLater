import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

const prodDb = 'mongodb://localhost:27017/WatchLater';
const testDb = 'mongodb://localhost:27017/WatchLater_test';

// Connect to MongoDB
mongoose.connect(process.env.NODE_ENV === 'test' ? testDb : prodDb)
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