// import _ from 'lodash';
import { cube } from './math';
import { numToWord } from 'my-number-trans-test';

const { MyMath, MyDate } = require('bad-egg-tools');

console.log(MyMath);
var elem = document.createElement('div');

// elem.innerText = _.join(['first', 'webpack', cube(3).toString()], ' ');
elem.innerText = [cube(5).toString(), '123'].join(' ');

document.body.appendChild(elem);
