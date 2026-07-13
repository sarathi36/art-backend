const express = require("express");
const router = express.Router();

const {  getChart } = require("../Controller/ChatController");

router.get("/chart", getChart);

module.exports = router;