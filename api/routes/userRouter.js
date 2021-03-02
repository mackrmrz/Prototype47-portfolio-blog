const userRouter = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const User = require("../models/user");


userRouter.get("/", auth, async (req, res) => {
    await User.find()
    .then(user => res.status(200).json({
        user: user
    }))
    .catch(err => res.status(404).json("err", err))
});

userRouter.post("/create-user", (req, res) => {
    User.find({ 
        email: req.body.email,
        first_name: req.body.first_name,
     })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({ 
                    msg: "Fill in all Fields"
                });
            }else{
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            errorMsg: err
                        });
                    } else {
                        const user = new User({
                            first_name: req.body.first_name,
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(results => {
                                res.status(201).json({
                                    message: "SignUp Created",
                                    first_name: results.first_name,
                                    email: results.email
                                })
                            })
                            .catch(err => {
                                console.log("This is the error I don't want to see", err)
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        })
});


userRouter.post("/sign-in", (req, res) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(400).json({
                    message: "Must fill all feilds."
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });      
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        }, 
                            process.env.JWT_KEY,
                        {
                            expiresIn: "1hr"
                        }
                    );
                    return res.status(200).json({
                        message: "Succesful Login",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });      
            });
        });
})


userRouter.delete("/", (req, res) => {//also auth at some point
    User.deleteMany()
        .then(gone => gone.remove().then(() => res.json({
            msg: " All are removed"
        })))
        .catch(err => res.status(400).json(err))
});


module.exports = userRouter;