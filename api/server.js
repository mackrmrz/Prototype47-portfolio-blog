const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//ADDING THE ROUTES
const portfolioRouter = require("./routes/portfolioRoute");
const carRouter = require("./routes/carsRoute");
const userRouter = require("./routes/userRouter");
const imageRouter = require("./routes/images");
const contactRouter = require("./routes/emailContact");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 7900;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('upload'));
app.use(fileUpload({useTempFiles: true}));
app.use(cookieParser());


//CONNECTING TO MONGO
const uri = process.env.MONGO_URI;
mongoose.connect(uri, 
    { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MONGODB is established successfully");
})

//USING THE ROUTES
app.use('/username', userRouter);
app.use('/portfolio-items', portfolioRouter);
app.use('/car-collection', carRouter);
app.use('/images', imageRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})