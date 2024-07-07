# jQuery Learning Project 🎓

## This is a clicker game made with jQuery 🖱️

This project is a simple clicker game built using jQuery. The main features include:

### Features

- **User Button**: Displays the user stats. 👤
- **Theme Toggle Button**: Allows toggling between light and dark modes. 🌞🌜
- **Main Clicker Button**: The primary button for clicking to earn coins. 💰
- **Coin Counter**: Displays the total number of coins earned. 🪙
- **Shop Section**: Contains buttons for upgrades and auto-tap functionality. 🛒
- **Stats Section**: Shows statistics like coins earned by tap and auto-tap. 📊
- **Game Rules**: Provides information on how to play the game. 📜

Credits the creator, Anton Kamaev. 👨‍💻

Enjoy clicking and earning coins! (Tap-Tap)

## jQuery Code Snippets

- [Change Color and Count](#change-color-and-count)
- [Background Animation](#background-animation)
- [Typewriter Effect](#typewriter-effect)

### Change Color and Count

```javascript
window.clickBtn = () => {
  const colors = ['#7DA58D', '60718C', '#BF748E', '#F7C9B5', '#C49766'];
  $('.cliker__btn').toggleClass('active');

  count += stateTap;
  $('#count').text(count);

  userCountStat.css('color', colors[Math.floor(Math.random() * colors.length)]);
};
```

This function changes the color of the coin counter and updates the count each time the main clicker button is pressed. It also toggles the active class for the button animation.

### Background Animation

```javascript
export const switchTheme = () => {
  $('body').toggleClass('dark');
  $('#clicker').toggleClass('dark--clicker');

  $('.container--info').toggleClass('border__dark');

  $('.header__user').toggleClass('header__user--dark');

  const btnState = $('.btn__state');
  const currentText = btnState.text();
  const newText = currentText === '☀️' ? '🌒' : '☀️';

  btnState.text(newText);

  newText === '🌒' ? btnState.css('left', '32px') : btnState.css('left', '2px');
};
```

This function toggles various CSS classes to switch between light and dark themes. It also updates the theme toggle button's text and position.

### Typewriter Effect

```javascript
import {switchTheme} from './func.js';

const app = $('#text').get(0);

var customNodeCreator = character => {
  return document.createTextNode(character);
};

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .typeString('Coinz clicker')
  .start()
  .callFunction(() => {
    $('.Typewriter__cursor').text('');

    setTimeout(() => {
      switchTheme();
    }, 3000);
  });
```

This code initializes a typewriter effect for the text element with the ID text. It types out "Coinz clicker" and then switches the theme after a delay.
