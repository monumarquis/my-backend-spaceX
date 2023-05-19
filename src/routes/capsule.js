const express = require("express");
const router = express.Router();
const { userPrivateRoute } = require("../middlewares/auth");
const Capsule = require("../models/capsule");

// All Capsules Authorized route
router.get("/", userPrivateRoute, async (req, res) => {
  let { page = 1, status, type, limit = 10, year } = req.query;
  const regex = new RegExp(year, "i");
  type = type ? type.replace("_", " ") : null;
  let skipPages = (page - 1) * limit;
  let capsules;
  try {
    // ****************
    if (status && type) {
      capsules = await Capsule.find({
        status,
        type,
      })
        .skip(skipPages)
        .limit(limit);
    }
    // ****************
    // ****************
    else if (status) {
      capsules = await Capsule.find({ status }).skip(skipPages).limit(limit);
      console.log(type, status);
    }
    // ****************
    else if (type) {
      capsules = await Capsule.find({ type }).skip(skipPages).limit(limit);
      console.log(type, status);
    }
    // ****************
    else {
      capsules = await Capsule.find().skip(skipPages).limit(limit);
      console.log(type, status);
    }
    return res.status(201).send({ totalPages: 2, capsules });
  } catch (error) {
    return res.status(500).send({ error: "An error occurred" });
  }
});

module.exports = router;
