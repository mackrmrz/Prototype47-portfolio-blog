const projectRouter = require('express').Router();
const Project = require('../models/portfolioItems');
const auth = require('../middleware/auth');
const { cloudinary } = require('../utils/uploadConfig');

projectRouter.get('/', (req, res) => {
  Project.find()
    // .select(" description")
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json(err));
});

projectRouter.post('/adding-project', auth, async (req, res) => {
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
    console.log('ERROR IN CATCH', error);
  }
});

//still have to add the route to serverjs.

projectRouter.delete('/delete-one/:id', auth, (req, res) => {
  Project.findOneAndDelete(req.params.id)
    .then((item) =>
      item.remove().then(() =>
        res.json({
          msg: 'project removed'
        })
      )
    )
    .catch((err) => res.status(400).json(err));
});

projectRouter.delete('/delete-all', (req, res) => {
  Project.deleteMany({})
    .then((removed) =>
      res.json({
        msg: ' All are removed'
      })
    )
    .catch((err) => res.status(400).json(err));
});
module.exports = projectRouter;
