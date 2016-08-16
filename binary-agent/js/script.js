$('.menu-list input[type="checkbox"]').on('change', function() {
  $('.menu-list input[type="checkbox"]').not(this).prop('checked', false);
});


$('.show-htable').hover(function(){
  $('.show-htable table').hide();
  $(this).find('table').show();
});


$('.show-htable table').mouseleave(function(){
  $(this).hide()
});

