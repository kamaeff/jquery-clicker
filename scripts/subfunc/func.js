// NOTE: Main switch theme func
export const switchTheme = () => {
  $('body').toggleClass('dark');
  $('#clicker').toggleClass('dark--clicker');

  $('.container--info').toggleClass('border__dark');

  $('.header__user')
    .toggleClass('header__user--dark')
    .toggleClass('dark_shodow');
  $('h1').toggleClass('dark_shodow');

  const btnState = $('.btn__state');
  const currentText = btnState.text();
  const newText = currentText === '☀️' ? '🌒' : '☀️';

  btnState.text(newText);

  newText === '🌒' ? btnState.css('left', '32px') : btnState.css('left', '2px');
};

export function createTapAnimation() {
  const colors = ['#7DA58D', '#60718C', '#BF748E', '#F7C9B5', '#C49766'];

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
