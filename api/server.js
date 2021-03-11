require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = express.json();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

//ADDING THE ROUTES
const portfolioRouter = require('./routes/portfolioRoute');
const carRouter = require('./routes/carsRoute');
const userRouter = require('./routes/userRouter');

const app = express();
const port = process.env.PORT || 7900;
app.use(cors())

app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['https://tqr-cars-client.herokuapp.com', 'http://localhost:3000']
  })
);

app.use(bodyParser);
app.use(fileUpload({ useTempFiles: true }));
app.use(cookieParser());

//CONNECTING TO MONGO
const uri = process.env.MONGODB_URI;
mongoose.connect(uri || 'mongodb://127.0.0.1:27017/javiPortfolio', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MONGODB is established successfully');
});


//USING THE ROUTES
app.use('/username', userRouter);
app.use('/portfolio-items', portfolioRouter);
app.use('/car-collection', carRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
