// import _ from 'lodash';
import { cube } from './math';
import { numToWord } from 'my-number-trans-test';

var elem = document.createElement('div');
console.log(numToWord('1'));

// elem.innerText = _.join(['first', 'webpack', cube(3).toString()], ' ');
elem.innerText = [cube(5).toString(), '123'].join(' ');

document.body.appendChild(elem);
