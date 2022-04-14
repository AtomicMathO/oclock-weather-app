const axios = require("axios");
const res = require("express/lib/response");

const apiController = {
  base_url: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    units: "metric",
    lang: "fr",
    appid: process.env.API_KEY
  },

  async getWeather(req, res) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=74000,fr&units=metric&lang=fr&appid=${process.env.API_KEY}`)

      res.render("index", {weather: response.data})
  },

  getPlaceForm(req, res) {
    res.render("choose_place");

  },

  async getWeatherByPlace(req, res) {
    const {place} = req.body;
    let params = {};
    if (/^[a-zA-Z]+$/.test(place)) {
      params = {
        q: place,
      }
    } else if (/^[0-9]+$/.test(place)) {
      params = {
        zip: place +",fr",
      }
    }
    const response = await axios.get(apiController.base_url, {params: params})
    res.render("index", {weather: response.data})
  }
}

module.exports = apiController;