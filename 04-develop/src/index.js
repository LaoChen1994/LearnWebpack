import _ from 'lodash';
import print from './print';

var elem = document.createElement('div');

elem.innerText = _.join(['first', 'webpack', '456'], ' ');
print();

document.body.appendChild(elem);
