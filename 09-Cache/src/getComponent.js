import './style.css';

export const getComponent = () => {
  const node = document.createElement('div');
  node.classList.add('text');
  node.innerHTML = 'text';
  return node;
};
