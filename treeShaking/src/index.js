// import _ from 'lodash';
import { cube } from './math.js.js';

var elem = document.createElement('div');

// elem.innerText = _.join(['first', 'webpack', cube(3).toString()], ' ');
elem.innerText = [cube(5).toString(), '123'].join(' ');

document.body.appendChild(elem);
