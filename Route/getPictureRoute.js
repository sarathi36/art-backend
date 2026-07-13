const express = require("express");
const router = express.Router();

const { getPicture } = require("../Controller/getPicture");

router.get("/picture", getPicture);

module.exports = router;