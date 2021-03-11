const projectRouter = require('express').Router();
const Project = require('../models/portfolioItems');
const auth = require('../middleware/auth');
const { cloudinary } = require('../utils/uploadConfig');

projectRouter.get('/', (req, res, next) => {
  Project.find((err, items) => {
    if (err){
      res.status(401).json({
        msg: err
      })
    }else{
      res.status(200).json({
        response: items
      })
    }
  })
});

projectRouter.post('/adding-project', async (req, res, next) => {
  const file = req.files.project_image;
  try {
    const cloud = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: 'prototype_project_image'
    });
    const newName = new Project({
      title: req.body.title,
      skill: req.body.skill,
      description: req.body.description,
      project_url: cloud.secure_url
    });

    await newName
      .save()
      .then((project) =>
        res.status(201).json({
          msg: 'Project card added.',
          project: project
        })
      )
      .catch((err) =>
        res.status(400).json({
          ErrorMsg: 'There was someting wrong in connection',
          Error: err
        })
      );
  } catch (error) {
    res.status(400).json({
      ERROR: error
    });
  }
});

//still have to add the route to serverjs.

projectRouter.delete('/delete-one/:id', (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then((item) =>
      res.json({
        msg: 'Project removed'
      })
    )
    .catch((err) =>
      res.status(400).json({
        ERROR: `${err}`
      })
    );
});

projectRouter.delete('/delete-all', auth, (req, res, next) => {
  Project.deleteMany({})
    .then((removed) =>
      res.json({
        msg: ' All are removed',
        deletedItem: removed
      })
    )
    .catch((err) => res.status(400).json({
      ERROR: err
    }));
});


module.exports = projectRouter;