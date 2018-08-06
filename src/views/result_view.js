const PubSub = require('../../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  if (result){
    resultElement.textContent = `Word count: ${result}`
  }
  else {
    resultElement.textContent = "No, it's not a prime number."
  }
};

module.exports = ResultView;
