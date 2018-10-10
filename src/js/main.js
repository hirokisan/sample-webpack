// ここで読み込んだファイルがloaderによって処理される
import _ from 'lodash';
import '../css/app.scss';
import '../css/style.css';
import csv  from '../csv/name.csv';
import yml  from '../yml/name.yml';
import json from '../json/name.json';
import Icon from '../img/tmp/big-icon.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('prefix');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(json);
  console.log(csv);
  console.log(yml);

  return element;
}

document.body.appendChild(component());
