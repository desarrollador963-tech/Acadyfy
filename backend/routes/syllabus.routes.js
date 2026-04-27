const express = require("express");
const router = express.Router();

const controller = require("../controllers/syllabus.controller");

router.get("/", controller.getSyllabus);
router.post("/", controller.createSyllabus);

module.exports = router;