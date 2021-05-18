const express = require("express");

const routes = express.Router();
const ocr_controller = require('../control/ocr_controller')


routes
  //OCR
  .get("/ocr", ocr_controller.index)

module.exports = routes;
