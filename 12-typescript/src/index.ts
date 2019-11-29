import _ from 'lodash';
import { add, padNumber } from './tool';

var elem = document.createElement('div');
var btn = document.createElement('button');
var numList = Array.from({ length: 10 }).map((elem, index) => index);

elem.innerHTML = _.join(['1', '2', '3'], '-');
btn.innerHTML = 'Click';
btn.onclick = () =>
  console.log(padNumber(numList[Math.floor(Math.random() * 10)]));

document.body.appendChild(elem);
document.body.appendChild(btn);
