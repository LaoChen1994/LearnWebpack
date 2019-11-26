import _ from 'lodash';

var elem = document.createElement('div');
var btn = document.createElement('button');

elem.innerText = _.join(['first', 'webpack'], ' ');
btn.innerHTML = 'Click Me';
btn.onclick = e =>
  import(/* webpackChunkName: "printjs" */ './print').then(func =>
    func.default()
  );

elem.appendChild(btn);
document.body.appendChild(elem);
