# jQuery Learning Project 🎓

## This is a clicker game made with jQuery 🖱️

This project is a simple clicker game built using jQuery. The main features include:

[Clicker](https://github.com/kamaeff/jquery-clicker/assets/99755906/eaeed489-e95d-4505-856e-6f3d007b0af8)

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
- [Tap Animation](#tap-animation)
- [Rewards](#rewards)

### Change Color and Count

```javascript
window.clickBtn = () => {
  $('.cliker__btn').toggleClass('active');

  coinz += stateTap;

  taps++;
  $('#count').text(coinz);
  $('#count').css('color', colors[Math.floor(Math.random() * colors.length)]);
  $('#allTaps').text(taps);

  $('.error').text('').removeClass('show');

  if (taps === 1) {
    coinz += 100;
    showNotification(`Hi! Let's farm! Some gift for you :)`);
  }

  let rewardAmount = reward(taps);
  if (rewardAmount) {
    coinz += rewardAmount;

    showNotification(`Gratz! You received ${rewardAmount} Coinz as a reward.`);
  }

  createTapAnimation(colors);
  saveGameState();
};
```

This function changes the color of the coin counter and updates the count each time the main clicker button is pressed. It also toggles the active class for the button animation.

### Background Animation

```javascript
export const switchTheme = () => {
  $('body').toggleClass('dark');
  $('#clicker').toggleClass('dark--clicker');

  $('.container--info').toggleClass('border__dark');

  $('h1').toggleClass('dark_shodow');

  const btnState = $('.btn__state');
  const currentText = btnState.text();
  const newText = currentText === '☀️' ? '🌒' : '☀️';

  btnState.text(newText);

  newText === '🌒' ? btnState.css('left', '32px') : btnState.css('left', '2px');
};
```

This function toggles various CSS classes to switch between light and dark themes. It also updates the theme toggle button's text and position.

### Tap Animation

```javascript
export function createTapAnimation(colors) {
  const tap = $('<div class="tap">TAP</div>');
  $('body').append(tap);

  const tapWidth = tap.outerWidth();
  const tapHeight = tap.outerHeight();
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  const randomX = Math.random() * (windowWidth - tapWidth);
  const randomY = Math.random() * (windowHeight - tapHeight);

  tap.css({
    position: 'absolute',
    top: randomY,
    left: randomX,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  setTimeout(() => {
    tap.remove();
  }, 1000);
}
```

The createTapAnimation function generates a visual animation on a web page where a word "TAP" appears briefly at a random position and then disappears after a short period.

### Rewards

```javascript
function reward(taps) {
  return rewards[taps] || 0;
}

function showNotification(message) {
  $('#notificationText').text(message);

  $('.notification').addClass('show');

  setTimeout(function () {
    $('.notification').removeClass('show');
  }, 2000);
}
```

Notifications: showNotification is used to provide feedback to the user about their actions (e.g., initial gift, rewards received)

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
