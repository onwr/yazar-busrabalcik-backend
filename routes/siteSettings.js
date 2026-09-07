const express = require("express");
const router = express.Router();
const SiteSettings = require("../models/SiteSettings");
const { verifyToken } = require("../middleware/auth");

router.get("/", async (req, res, next) => {
  try {
    const settings = await SiteSettings.getAll();
    res.json(settings);
  } catch (error) {
    next(error);
  }
});

router.put("/", verifyToken, async (req, res, next) => {
  try {
    const settings = await SiteSettings.setMany(req.body || {});
    res.json(settings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
