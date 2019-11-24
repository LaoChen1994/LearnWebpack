import _ from 'lodash';
import './style.sass';
import pic from './test.jpeg';
import Data from './data.xml';

var elem = document.createElement('div');

elem.innerText = _.join(['first', 'webpack'], ' ');
elem.classList.add('hello');

var img = new Image();
img.src = pic;
console.log(Data);

document.body.appendChild(elem);
document.body.appendChild(img);
