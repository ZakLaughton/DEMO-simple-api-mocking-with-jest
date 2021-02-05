/* 
https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
https://zetcode.com/javascript/axios/
*/
const axios = require("axios");

async function getAlbum(url) {
  const response = await axios.get(url);
  return response;
}

async function postAlbum(url) {
  const response = await axios.post(url);
  return response;
}

module.exports = {
  getAlbum: getAlbum,
  postAlbum: postAlbum,
};
