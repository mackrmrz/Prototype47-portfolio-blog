const carRouter = require('express').Router();
const Cars = require('../models/cars');
const path = require('path');
const { cloudinary } = require('../utils/uploadConfig');

// require("dotenv").config();

//ROUTES TO CARS AND IMAGES
carRouter.get('/', (req, res) => {
  Cars.find()
    .then((car) => res.status(200).json(car))
    .catch((err) => res.status(404).json(err));
});


//TRY CATCH ASYNC AND AWAIT

carRouter.post("/adding-to-cloudinary", async (req, res) => {
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
    })
    await newCar.save()
    .then(car => res.status(200).json({
      msg: 'Car has been uploaded!',
      car: car
    }))
    .catch(error => res.status(400).json({
      msg: 'There is an error in the saving the car.',
      Error: error
    }))
  } 
  catch (error) {
    // console.log("Error in the cloud function", error);
    res.status(400).json({
      msg: 'Bad Request',
      Error: error
    })
  }
})

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


// carRouter.delete('/:_id', (res, req) => {
//   console.log("DELETE BY ID", req.params.id);
//   Cars.findOneAndRemove({_id: req.params.id})
//     .then((item) =>
//       item.remove().then(() =>
//         res.json({
//           msg: 'vehicle removed'
//         })
//       )
//     )
//     .catch((err) => res.status(400).json({
//       msg: "There was an error",
//       Error: err
//     }))
// });



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