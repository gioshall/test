function timePickerOnClick() {
  document.getElementById('time-picker').style.display = 'block';
}
function hideTimePicker() {
  document.getElementById('time-picker').style.display = 'none';
}
function gotoDetail() {
  //console.log('go to detail');
  window.location.href = 'detail.html';
}

// side menu

$('#nav-icon').click(function(){
	$(this).toggleClass('open');
	$('.wrapper, .side-menu').toggleClass('active');
});

$('input[type="checkbox"]').on('change', function() {
	$('input[type="checkbox"]').not(this).prop('checked', false);
});