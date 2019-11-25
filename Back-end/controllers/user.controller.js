const { User } = require('../models/user');

const controller = {};

controller.getAll = async (req, res) => {
    User.find().then((users) => {
      res.send(users);
    }).catch((e) => {
      console.log({status: "Fail", error: e.message});
      res.status(404).send({status: "Fail", error: e.message});
    });
}

controller.createOne = async (req, res) => {
  const user = new User(req.body);
  user.save()
  .then((user) => {
    res.send({user});
  }).catch((e) =>{
    res.status(404).send({status: "Fail", error: e.message});
  });
}

module.exports = controller;