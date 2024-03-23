const indexController = require('../src/controller/indexController')
const express = require('express');
const router = express.Router();


router.get("/", indexController.calculoImc)

router.post("/", indexController.calculoImc)

module.exports = router;