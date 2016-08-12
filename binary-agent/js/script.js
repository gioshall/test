$('.menu-list input[type="checkbox"]').on('change', function() {
  $('.menu-list input[type="checkbox"]').not(this).prop('checked', false);
});
