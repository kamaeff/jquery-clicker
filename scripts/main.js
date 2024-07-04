import { switchTheme } from './subfunc/func.js';
import './subfunc/type.js';

let count = 0;
let stateTap = 1;
let stateAutoTap = false;

// NOTE: Change color and count
window.clickBtn = () => {
  const colors = ['#7DA58D', '60718C', '#BF748E', '#F7C9B5', '#C49766'];
  $('.cliker__btn').toggleClass('active');

  count += stateTap;
  $('#count').text(count);

  $('#count').css('color', colors[Math.floor(Math.random() * colors.length)]);
};

// NOTE: Back animation
window.changeBg = () => {
  switchTheme();
};

$('#byTap').text(`Coinz per tap: ${stateTap}`);
$('#autoTap').text(`AutoTap: ${stateAutoTap ? '✅' : '❌'}`);

$(document).ready(() => {
  console.log(
    'This is my jQuery clicker project' + '\n' + 'Created by Anton Kamaev',
  );

  lucide.createIcons();
});
