var elem = document.createElement('div');
var span = document.createElement('span');

var btnTool = require('./addBtn.js');
var btn = btnTool.addBtn();
document.body.appendChild(btn);

elem.innerText = _.join(['first', 'webpack'], ' ');
span.innerHTML = join(['1', '2', '3'], '-');

document.body.appendChild(elem);
document.body.appendChild(span);
