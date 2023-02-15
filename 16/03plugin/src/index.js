console.log('Hello');

// Добавляєм імпорт і бачимо що не працює
import module from "./module";
module();
import './styles/index.scss';

// npm install -g webpack-cli
// npm install --save-dev webpack
// npm install webpack-cli --save-dev

// 2 добавимо модуль щоб підключити
// npm install axios
const axios = require('axios');
function helloAxios(){
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
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
}
helloAxios();

  // 3 створюємо вебпак конфіг
  