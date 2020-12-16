const express = require("express");
const router = express.Router();

const BattelData = require("../models/data");

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const getListOfLocations = (data) => {
  const temp = [];
  data.forEach((battel) => {
    const { location } = battel;
    if (location.length > 0) {
      temp.push(location);
    }
  });
  const listOfPlaces = temp.filter(unique);
  return listOfPlaces;
};

router.get("/list", (req, res, next) => {
  BattelData.find({}, { location: 1 }, function (err, data) {
    if (err) {
      return err;
    }
    return res.status(201).json({
      response: getListOfLocations(data),
    });
  });
});

router.get("/count", (req, res, next) => {
  BattelData.find({})
    .exec()
    .then((data) => {
      res.status(200).json({
        totalCount: data.length,
        response: data
      });
    });
});

module.exports = router;
