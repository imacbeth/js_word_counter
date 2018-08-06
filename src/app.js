const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js');
const WordCounter = require('./models/word_counter.js');

const formSubmitHandler = function(evt) {
  evt.preventDefault();
  const form = evt.target;
  renderResultFromForm(form);
  form.reset();
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', formSubmitHandler);

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
