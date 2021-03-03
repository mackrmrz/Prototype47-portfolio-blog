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

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})