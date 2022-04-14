const express = require("express");
const routerWrapper = require("../middleware/routerWrapper");
const apiController = require("../controller/apiController");

const router = express.Router();

router.route("/").get(routerWrapper(apiController.getWeather));

router
  .route("/place")
  .get(routerWrapper(apiController.getPlaceForm))
  .post(routerWrapper(apiController.getWeatherByPlace));

module.exports = router;
