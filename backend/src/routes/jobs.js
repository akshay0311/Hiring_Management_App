const express = require('express');
const jobs = require("../controller/jobs");

const router = express.Router();


router.get("/get_jobs",jobs.get_all_jobs);




module.exports = router;