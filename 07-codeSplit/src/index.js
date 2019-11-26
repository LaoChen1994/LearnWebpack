// import _ from 'lodash';

// var elem = document.createElement('div');

// elem.innerText = _.join(['first', 'webpack'], ' ');

// document.body.appendChild(elem);

function getComponent() {
  return import(/* webpackChunkName: "firstLodash" */ 'lodash')
    .then(_ => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['dynamic', 'import'], ' ');
      return element;
    })
    .catch(e => console.log(e));
}

getComponent().then(component => {
  document.body.appendChild(component);
});
