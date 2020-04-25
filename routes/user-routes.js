const express = require("express")
const router = express.Router()
const db = require("../models")

router.post('/users/new', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser))
})

router.get('/users/all', (req, res) => {
    db.User.findAll({
        include: [db.Profile,db.Post]
    }).then(allUsers => res.send(allUsers))
})

router.post('/profile/new', (req, res) => {
    db.Profile.create({
        name: req.body.name,
        UserId: req.body.UserId
    }).then(newUser => res.send(newUser))
})

router.get('/profile/find/:id', (req, res) => {
    db.Profile.findAll({
        where: { UserId: req.params.id},
        include: [db.User]
    }).then(profile => res.send(profile))
})

router.post('/post/new', (req, res) => {
    db.Post.create({
        text: req.body.text,
        UserId: req.body.UserId
    }).then(newPost => res.send(newPost))
})

router.get('/post/find/:id', (req, res) => {
    db.Post.findAll({
        where: { UserId: req.params.id},
        include: [db.User]
    }).then(post => res.send(post))
})

module.exports = router