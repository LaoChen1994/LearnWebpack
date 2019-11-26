import _ from 'lodash';

var elem = document.createElement('div');

elem.innerText = _.join(['1', '2', '3'], '-');

document.body.appendChild(elem);

console.log(process.env.NODE_ENV);
