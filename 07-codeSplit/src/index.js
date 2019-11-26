import _ from 'lodash';

var elem = document.createElement('div');

elem.innerText = _.join(['first', 'webpack'], ' ');

document.body.appendChild(elem);
