// app.config.js
const fs = require("fs");

const country = process.env.COUNTRY || "ua"; // default 'ge'

const countryConfigMap = {
  ge: {
    country: "ge",
    backgroundColor: "#e74c3c",
    message: "გამარჯობა საქართველოდან 🇬🇪",
  },
  ua: {
    country: "ua",
    backgroundColor: "#3498db",
    message: "Привіт з України 🇺🇦",
  },
  uz: {
    country: "uz",
    backgroundColor: "#27ae60",
    message: "Salom Oʻzbekistondan 🇺🇿",
  },
};

module.exports = () => ({
  expo: {
    name: "MultiCountryApp",
    slug: "multi-country-app",
    version: "1.0.0",
    platforms: ["ios", "android", "web"],
    extra: {
      ...countryConfigMap[country],
    },
  },
});
