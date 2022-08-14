$('.js-clearSearchBox').css('opacity', '0');

$('.js-searchBox-input').focus(function() {
  $('.searchBox-fakeInput').toggleClass("is-focussed");
});

$('.js-searchBox-input').keyup(function() {
  if ($(this).val() !='' ) {
    $('.js-clearSearchBox').css('opacity', '1');
  } else {
    $('.js-clearSearchBox').css('opacity', '0');
  };

  $(window).bind('keydown', function(e)  {
    if(e.keyCode === 27) {
      $('.js-searchBox-input').val('');
    };
  });
});
// click the button
$('.js-clearSearchBox').click(function() {
  $('.js-searchBox-input').val('');
  $('.js-searchBox-input').focus();
  $('.js-clearSearchBox').css('opacity', '0');
});
