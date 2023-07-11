require("dotenv").config();
const apiKey = process.env.REACT_APP_NASA_KEY;

export const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
