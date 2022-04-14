const axios = require("axios");
const res = require("express/lib/response");

const apiController = {
  async getWeather(req, res) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=74000,fr&units=metric&lang=fr&appid=${process.env.API_KEY}`)

      res.render("index", {weather: response.data})
  },

  getPlaceForm(req, res) {
    res.render("choose_place");

  },

  async getWeatherByPlace(req, res) {
    const {place} = req.body;
    let url = "";
    let response = {};
    if (/^[a-zA-Z]+$/.test(place)) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=fr&appid=${process.env.API_KEY}`
    } else if (/^[0-9]+$/.test(place)) {
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${place},fr&units=metric&lang=fr&appid=${process.env.API_KEY}`
    }
    response = await axios.get(url)
    res.render("index", {weather: response.data})
  }
}

module.exports = apiController;