const WordCounter = function () {

};

WordCounter.prototype.countWords = function (text) {

  words = text.split(' ')


  for (i = 0; i = words.length; i++){
    if (words === ""){
      return 0;
    }
    else if (words === " ") {
      i -= 1;
    }
    else {
      return i;
    }
  }
};

module.exports = WordCounter;
