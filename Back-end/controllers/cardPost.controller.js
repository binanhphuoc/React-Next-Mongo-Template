const { cardPost } = require('../models/cardPost');

const controller = {};

controller.getAll = async (req, res) => {
    cardPost.find().then((cards) => {
      res.send(cards);
    }).catch((e) => {
      console.log({status: "Fail", error: e.message});
      res.status(404).send({status: "Fail", error: e.message});
    });
}

controller.createOne = async (req, res) => {
  const card = new cardPost(req.body);
  card.save()
  .then((card) => {
    res.send({card});
  }).catch((e) =>{
    res.status(404).send({status: "Fail", error: e.message});
  });
}

controller.updateALot = async (req, res) => {
  // cardPost.find({
  //   likes: req.body.likes
  // }).then(posts => {
  //   console.log("DONE");
  //   res.send(posts);
  // })
  // .catch(e => {
  //   console.log(e);
  //   res.status(400).send({error: e});
  // });
  cardPost.updateMany(req.body.condition, {$set: req.body.actions})
  .then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(e => {
    console.log(e);
    res.status(400).send({error: e});
  });
  // cardPost.save() -> WRONG, updateMany đã tự động save mọi thứ
}

module.exports = controller;