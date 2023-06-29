const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";

  if (text === "") {
    response = `CON Welcome to song-request-ussd-app. \nChoose your favorite genre to continue.`;
  }

  if (text !== "") {
    let ussdRoute = text?.split("*");
    console.log(ussdRoute);
    if (ussdRoute?.length === 1) {
      response = `CON Choose a genre:\n1. Pop\n2. Hip Hop\n3. Rock\n4. R&B\n`;
    } else if (ussdRoute?.length > 1) {
      response = `CON Choose a song in the ${ussdRoute[1]} genre:\n`;
      if (ussdRoute[1] === "1") {
        response += `1. Shape of You - Ed Sheeran\n`;
        response += `2. Blinding Lights - The Weeknd\n`;
        response += `3. Dance Monkey - Tones and I\n`;
      } else if (ussdRoute[1] === "2") {
        response += `1. Lose Yourself - Eminem\n`;
        response += `2. Old Town Road - Lil Nas X\n`;
        response += `3. Sicko Mode - Travis Scott\n`;
      } else if (ussdRoute[1] === "3") {
        response += `1. Bohemian Rhapsody - Queen\n`;
        response += `2. Stairway to Heaven - Led Zeppelin\n`;
        response += `3. Hotel California - Eagles\n`;
      } else if (ussdRoute[1] === "4") {
        response += `1. Adorn - Miguel\n`;
        response += `2. Superstition - Stevie Wonder\n`;
        response += `3. I Want You Back - Jackson 5\n`;
      }
    }
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

module.exports = router;
