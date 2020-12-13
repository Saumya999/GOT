const express = require("express");
const router = express.Router();

const BattelData = require("../models/data");

router.get("/search", (req, res, next) => {
  if (req.query.location && req.query.type) {
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
  }
  else {
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
