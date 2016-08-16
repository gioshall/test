// timepicker

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
	//$('body').toggleClass('active');	
	$('body').toggleClass('active').bind('touchmove', function(e) {
		var hasc = $('body').attr('class');
		if ( hasc == 'active' ) {
			e.preventDefault();
		} else {
			return true;
		}
	});
});



$('.menu-list input[type="checkbox"]').on('change', function() {
	$('.menu-list input[type="checkbox"]').not(this).prop('checked', false);
});

// transaction

  function bidOverlay() {
	$('#bid-overlay').attr('class','');
  }

  $('.bid-btn .lbtn, .bid-btn .rbtn').click(function(){
    var ovlStyle = $(this).attr('comfirmOvl');
    $('#bid-overlay').addClass(ovlStyle)
  });

  $('#tab01').click(function(){
    $('.bid-btn').hide();
    $('#up-down').show();    
    $('.bid-tab li').removeClass('active');
    $(this).addClass('active');
  });
  $('#tab02').click(function(){
    $('.bid-btn').hide();
    $('#odd-even').show();  
    $('.bid-tab li').removeClass('active');
    $(this).addClass('active');
  });
  $('#tab03').click(function(){
    $('.bid-btn').hide();
    $('#big-small').show();
    $('.bid-tab li').removeClass('active');
    $(this).addClass('active');
  });

  $('.bottom-nav li').click(function(){
    $('.bottom-nav li').removeClass('active');
    $(this).addClass('active');
  });

  function navSwitch(e) {
    $('.bottom-nav li.' + e ).click(function(){
    $('.main-wrap').hide();
    $('.main-wrap.' + e ).show();
  });
  };

  
  var chartHeight = $(window).height() - 332;
  //console.log(chartHeight);
  $('.main-wrap').css('height',chartHeight)
