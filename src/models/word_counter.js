const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents= function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
      const inputtedText = evt.detail;
      const result = this.countWords(inputtedText);
      PubSub.publish('WordCounter:result', result);
    });
};

WordCounter.prototype.countWords = function (text) {

  let count = 0;
  words = text.split(' ');

  for (let i = 0; i < words.length; i++){
    if (words[i] != "")
      count += 1;
  }
  return count;
};

module.exports = WordCounter;
