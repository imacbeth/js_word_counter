const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input', (evt) => {
    const inputtedText = evt.target.value;
    
  })
};

module.exports = InputView;
