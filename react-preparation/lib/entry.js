"use strict";

const axios = require("axios");
axios.get("https://catfact.ninja/fact").then(function (res) {
  let el = document.getElementById("facts");
  el.innerHTML = res.data.fact;
});