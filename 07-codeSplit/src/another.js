// import _ from 'lodash';

// console.log(_.join(['1', '2', '3'], '-'));

const getComponent = async () => {
  const node = document.createElement('div');
  const _ = await import(/* webpackChunkName: 'anotherLodash' */ 'lodash');
  const math = await import(/* webpackChunkName: 'anotherMathjs' */ 'mathjs');
  node.innerHTML = _.join(
    ['Component', 'dynamic', 'import', math.sqrt(9).toString()],
    ' '
  );
  return node;
};

setTimeout(
  () =>
    getComponent().then(node => {
      document.body.appendChild(node);
    }),
  1000
);
