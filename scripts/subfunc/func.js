// NOTE: Main switch theme func
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
