import _ from 'lodash';
import print from './print';
import { component } from './newComponent';

var elem = document.createElement('div');
var btn = document.createElement('button');

elem.innerText = _.join(['first', 'webpack', '123'], ' ');

var node = component();
elem.appendChild(node);

btn.innerHTML = 'Click me';
btn.onclick = print;
elem.appendChild(btn);

document.body.appendChild(elem);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('print.js change');
    print();
  });
  module.hot.accept('./newComponent.js', function(e) {
    elem.removeChild(node);
    node = component();
    elem.appendChild(node);
  });
}
