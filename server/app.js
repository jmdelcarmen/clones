 const app = require('express')();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
mongoose.connect('mongodb://localhost/fakebook')
  .then(
    () => console.log('Successfully connected to Mongo'),
    (err) => console.log(err)
  );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//APIS
authRoutes(app);

export default app;
