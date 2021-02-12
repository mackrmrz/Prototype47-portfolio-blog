const imageRouter = require("express").Router();
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const Image =  require("../models/images");
const Project = require("../models/portfolioItems");
const { cloudinary } = require("../utils/uploadConfig");


// const cloudinary = require("cloudinary").v2;
require("dotenv").config();


imageRouter.post('/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'prototype99',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});


imageRouter.get("/", (req, res) => {
    Image.find()
    .populate("Project")
    .then(pic => res.status(200).json(pic))
    .catch(err => res.status(404).json(err))
});



//---MOVING WITH SOME EFFORT

imageRouter.post("/vehicle-image", (req, res) => {
    const vehicle_image = new Image({
        vehicle_image: req.files.path,
    });
    const file = req.files.vehicle_image;
    vehicle_image.save()
        .then(img => {
            console.log("IMG", img);
            res.status(200).json({
                msg: "Car Image Sent",
                Image: img
            })
        })
        .catch(err => {
            console.log("error", err);
            res.status(500).json({
                err: err
            });
        });
});



//  UPLOADING WITH BRAD USESTATE HOOK 
//
//
imageRouter.post("/fileupload", (req, res, next) =>{
    // console.log("From the api", req);
    if ( req.files === null) {
        return res.status(400).json({
            msg: "No file uploaded"
        });
    }

    const file = req.files.vehicle_image;

    file.mv(`${__dirname}/./../public/uploads/${file.name}`, err => {
        if (err) {
            console.log("Error: with possble path", err);
            return res.status(500).send(err);
        }
        
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
        next
    })
    cloudinary.uploader.upload("fileName");
})

module.exports = imageRouter;