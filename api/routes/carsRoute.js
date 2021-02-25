const carRouter = require('express').Router();
const Cars = require('../models/cars');
const path = require('path');
const { cloudinary } = require('../utils/uploadConfig');

// require("dotenv").config();

//ROUTES TO CARS AND IMAGES

carRouter.get('/', async (req, res) => {
  try {
    const { page= 1, limit= 3 } = req.query;
    const cars = await Cars.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Cars.countDocuments();
    res.status(200).json({
      cars: cars,
      meta: {
        current_page: page,
        total_pages: Math.ceil(count / limit)
      }
    })
  } catch (error) {
    console.log("ERROR", error);
  }
});

//TRY CATCH ASYNC AND AWAIT

carRouter.post('/adding-to-cloudinary', async (req, res) => {
  const file = req.files.vehicle_image;
  try {
    const cloud = await cloudinary.uploader.upload(file.tempFilePath);
    const newCar = new Cars({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      description: req.body.description,
      vehicle_image: cloud.public_id,
      secure_url: cloud.secure_url
    });
    await newCar
      .save()
      .then((car) =>
        res.status(200).json({
          msg: 'Car has been uploaded!',
          car: car
        })
      )
      .catch((error) =>
        res.status(400).json({
          msg: 'There is an error in the saving the car.',
          Error: error
        })
      );
  } catch (error) {
    // console.log("Error in the cloud function", error);
    res.status(400).json({
      msg: 'Bad Request',
      Error: error
    });
  }
});

carRouter.delete('/delete-one/:id', (req, res) => {
  Cars.findOneAndDelete(req.params.id)
    .then((item) =>
      item.remove().then(() =>
        res.json({
          msg: 'Vehicle removed'
        })
      )
    )
    .catch((err) => res.status(400).json(err));
});

carRouter.post('/form-tester', (req, res) => {
  console.log('Posting to form text', req.body);
  console.log('Posting a file', req.files);
});

carRouter.delete('/', (req, res) => {
  Cars.deleteMany()
    .then((gone) =>
      gone.remove().then(() =>
        res.json({
          msg: ' All are removed'
        })
      )
    )
    .catch((err) => res.status(400).json(err));
});

module.exports = carRouter;
