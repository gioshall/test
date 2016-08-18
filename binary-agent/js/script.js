$('.menu-list input[type="checkbox"]').on('change', function() {
  $('.menu-list input[type="checkbox"]').not(this).prop('checked', false);
});


$('.show-htable').mouseenter(function(){
  $('.show-htable table').hide();
  $(this).find('table').show();
});

// $('.show-htable table').mouseleave(function(){
//   $(this).hide();
// });

$(document).click(function(){
  $('.show-htable table').hide()
})