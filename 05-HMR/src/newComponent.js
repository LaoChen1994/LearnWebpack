import './style.css';

export const component = () => {
  const block = document.createElement('div');
  block.classList.add('text');
  block.innerText = 'component 456';
  return block;
};
