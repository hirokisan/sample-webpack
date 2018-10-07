// ここで読み込んだファイルがloaderによって処理される
import _ from 'lodash';
import '../css/app.scss';
import '../css/style.css';
import json from '../json/name.json';
import Icon from '../img/icon.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(json.data);

  return element;
}

document.body.appendChild(component());
