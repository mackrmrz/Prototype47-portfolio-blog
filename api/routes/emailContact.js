const contactRoute = require("express").Router();
const Contact = require("../models/emailContact");
const nodemailer = require("nodemailer");
require("dotenv").config();


contactRoute.post("/send",(req, res) => {
    console.log(req.body);
    const output = `
        <h2> You have a new contact request </h2>
        <h3> Contact Detail </h3>
        <ul>
            <li> Name: ${req.body.name}</li>
            <li> Company: ${req.body.name}</li>
            <li> Email: ${req.body.email}</li>
        </ul>
        <h3> Message </h3>
            <p> ${req.body.message} </p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailoutput = {
        form: "testprototype4@gmail.com",//whatenver email you want to use,
        to: "testprototype4@gmail.com",//whatever email you are sending too
        subject: "Contact Request",
        text: "Something Cool",
        html: output,
    };

    transporter.sendMail(mailoutput, (error, info) =>{
        if (error) {
            return console.log(error);
        }else{
            console.log("Message sent", info.messageId);
        }
    });

});

module.exports = contactRoute;