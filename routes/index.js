const express = require('express');
const router = express.Router();
const json = require("../helper/json");

router.get("/", (req, res, next) => {
    json.ok(res, "Read documentation on: https://github.com/erthru/placeholder");
});

module.exports = router;