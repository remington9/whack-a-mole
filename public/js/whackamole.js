$(function(){
	var mole = [];
	var moleHole = $('.empty');
	var gathered = 0

	$('#start').click(start);
	$('.empty').click(compareClick);

	function start() {
	    mole = [];
	    randomMoleHoleToSequence();
	    playback();
	}

	function randomMoleHoleToSequence() {
	    var random = Math.floor(Math.random() * 9);
	    mole.push(moleHole[random].id);
	}

	function activeMole(id){
		$('#' + id).addClass('mole');
		var randomImg = Math.floor((Math.random()*9)+1);
		$('.mole').html('<img src="/img/db' + randomImg + '.png">');
		setTimeout(function() {
	        $('#' + id).removeClass('mole');
	    }, 900);
	}

	function playback() {
	    var i = 0;
	    var intervalId = setInterval(function() {
	        activeMole(mole[i]);
	        i++;
	    randomMoleHoleToSequence();
		compareClick();
	    
	    }, 1000);
	}

	function compareClick(){
		if ($(this).hasClass('mole')){
			var imgName = $(this).find("img").attr('src');
			if(imgName == '/img/db8.png' || imgName == '/img/db9.png'){
				gathered--;
				$('#gathered').text('Balls Gathered # ' + gathered + '!');
			}else{
				gathered++;
				$('#gathered').text('Balls Gathered # ' + gathered + '!');
				if(gathered == 7){
					reviveKrillin();
				}
			}
		}
	}

	function reviveKrillin(){
		$('#myModal').modal('show');
		$('.reloadPage').on('click', function(){
			location.reload(true);
		});
	}
});





