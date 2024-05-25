$(function() {
  if (!$('.envelope').hasClass('open')) {
    $('.envelope').click(function() {
      $(this).removeClass('new').addClass('open');
      $("#song")[0].play(); // Play the audio when the envelope is opened
    });
  }
});
