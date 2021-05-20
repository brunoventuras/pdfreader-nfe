const express = require("express");
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const ocr_controller = require('../control/ocr_controller')


routes
  //OCR
  .get("/ocr",  multer(multerConfig).single('file'),ocr_controller.index)

module.exports = routes;
