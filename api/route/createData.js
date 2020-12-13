const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BattelData = require("../models/data");

router.post("/create", (req, res, next) => {
  const data = new BattelData({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    year: req.body.year,
    battle_number: req.body.battle_number,
    attacker_king: req.body.attacker_king,
    defender_king: req.body.defender_king,
    attacker_1: req.body.attacker_1,
    attacker_2: req.body.attacker_2,
    attacker_3: req.body.attacker_3,
    attacker_4: req.body.attacker_4,
    defender_1: req.body.defender_1,
    defender_2: req.body.defender_2,
    defender_3: req.body.defender_3,
    defender_4: req.body.defender_4,
    attacker_outcome: req.body.attacker_outcome,
    battle_type: req.body.battle_type,
    major_death: req.body.major_death,
    major_capture: req.body.major_capture,
    attacker_size: req.body.attacker_size,
    defender_size: req.body.defender_size,
    attacker_commander: req.body.attacker_commander,
    defender_commander: req.body.defender_commander,
    summer: req.body.summer,
    location: req.body.location,
    region: req.body.region,
    note: req.body.note,
  });

  data
    .save()
    .then(() => {
      res.status(200).json({
        response: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
