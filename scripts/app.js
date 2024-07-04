export const switchTheme = () => {
  $('body').toggleClass('dark');
  $('#clicker').toggleClass('dark--clicker');

  $('.game--info').toggleClass('game--info__dark');

  const btnState = $('.btn__state');
  const currentText = btnState.text();
  const newText = currentText === '☀️' ? '🌒' : '☀️';

  btnState.text(newText);

  newText === '🌒' ? btnState.css('left', '32px') : btnState.css('left', '2px');
};
