import { switchTheme } from './subfunc/func.js';
import './subfunc/type.js';

let coinz = 0;
let stateTap = 1;
let stateAutoTap = false;
let upgradeState = 0;
let taps = 0;

// NOTE: Change color and count
window.clickBtn = () => {
  const colors = ['#7DA58D', '60718C', '#BF748E', '#F7C9B5', '#C49766'];
  $('.cliker__btn').toggleClass('active');

  coinz += stateTap;
  taps++;
  $('#count').text(coinz);
  $('#count').css('color', colors[Math.floor(Math.random() * colors.length)]);
  $('#allTaps').text(taps);

  $('.error').text('').removeClass('show');
};

// NOTE: Back animation
window.changeBg = () => {
  switchTheme();
};

window.userModal = () => {
  $('#modal').addClass('modal__open');
};

window.closeModal = () => {
  $('#modal').removeClass('modal__open');
};

window.upgradeTap = () => {
  upgradeState++;
  let check = upgradeState * 10;

  if (coinz >= check) {
    stateTap++;
    coinz -= check;

    $('#count').text(coinz);
    $('#byTap').text(stateTap);
    $('#nextUpgrade').text(stateTap * 10);
  } else {
    upgradeState--;
    $('.error').text(`No Coinz for upgrade. Tap harder! ;)`).addClass('show');
  }
};

$('#nextUpgrade').text(stateTap * 10);
$('#byTap').text(stateTap);
$('#autoTap').text(stateAutoTap ? '✅' : '❌');

$(document).ready(() => {
  console.log(
    'This is my jQuery clicker project' + '\n' + 'Created by Anton Kamaev',
  );

  lucide.createIcons();

  $('#modal').on('click', function(event) {
    if ($(event.target).is('#modal')) {
      $(this).removeClass('modal__open');
    }
  });
});
