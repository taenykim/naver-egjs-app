const express = require("express");
const userAgentRouter = require("./userAgent");

const router = express.Router();

router.use("/userAgent", userAgentRouter);

module.exports = router;
