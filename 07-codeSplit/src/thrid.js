const getComponent = async () => {
  const math = await import(/* webpackChunkName: 'thirdMath' */ 'mathjs');
  const elem = document.createElement('div');
  elem.innerHTML = math.sqrt(4);
  return elem;
};

getComponent().then(node => document.body.appendChild(node));
