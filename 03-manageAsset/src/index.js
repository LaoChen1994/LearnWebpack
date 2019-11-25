import _ from 'lodash';
import { print } from './package.js';

var elem = document.createElement('div');

elem.innerText = _.join(['first', 'webpack'], ' ');

var btn = document.createElement('button');
btn.onclick = print;
elem.appendChild(btn);

btn.innerHTML = 'Click Me';

document.body.appendChild(elem);
