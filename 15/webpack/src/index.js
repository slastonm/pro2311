// npm install -g webpack-cli
// npm install --save-dev webpack
// npm install webpack-cli --save-dev

console.log('Hello main');
import module from "./module";
const axios = require('axios');
module();
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });