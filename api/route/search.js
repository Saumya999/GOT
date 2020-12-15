const express = require("express");
const router = express.Router();

const BattelData = require("../models/data");

router.get("/search", (req, res, next) => {

  if (req.query.location && req.query.type) {
    console.log("Hello 1");
    BattelData.find({
      $or: [
        { attacker_king: req.query.king },
        { defender_king: req.query.king },
        { location: req.query.location },
        { battle_type: req.query.type },
      ],
    })
      .exec()
      .then((data) => {
        res.status(200).json({
          response: data,
        });
      });
  } else if (req.query.location) {
    console.log(req.query.location);
    BattelData.find({ location: req.query.location })
      .exec()
      .then((data) => {
        res.status(200).json({
          response: data,
        });
      });
  } else {
    console.log("Hello 2");
    BattelData.find({
    $or: [{ attacker_king: req.query.king }, { defender_king: req.query.king }],
  })
    .exec()
    .then((data) => {
      res.status(200).json({
        response: data,
      });
    });
  }
});

module.exports = router;
