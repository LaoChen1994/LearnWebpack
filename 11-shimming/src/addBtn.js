const _this = this;
const addBtn = function() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click';
  btn.onclick = function() {
    _this.alert('click');
  };
  return btn;
};

module.exports = { addBtn };
