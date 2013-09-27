$(document).ready(function () {
  // Put your JavaScript behavior here
  $('#tab1').show();

  $('.tabs li').click(function(event){
    event.preventDefault();

    $('.tabs li').removeClass('active');
    $(this).addClass('active');

    var divId = $(this).find('a').attr('href');
    $('.tab').hide();
    $(divId).show();

  });
});