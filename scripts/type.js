import { switchTheme } from './app.js';

const app = $('#text').get(0);

var customNodeCreator = character => {
  return document.createTextNode(character);
};

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

// TODO: (A3) @Задача 3
typewriter
  .typeString('JQ clicker')
  .start()
  .callFunction(() => {
    $('.Typewriter__cursor').text('');

    setTimeout(() => {
      switchTheme();
    }, 3000);
  });
