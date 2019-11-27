import _ from 'lodash';
import { getComponent } from './getComponent';

var elem = document.createElement('div');

elem.innerText = _.join(['hello', 'webpack123'], ' ');

const comp = getComponent();

document.body.appendChild(elem);
document.body.appendChild(comp);
