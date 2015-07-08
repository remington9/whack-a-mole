$(function(){
	var mole = [];
	var moleHole = $('.empty');
	var whacked = 0

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
		setTimeout(function() {
	        $('#' + id).removeClass('mole');
	    }, 1000);
	}

	function playback() {
	    var i = 0;
	    var intervalId = setInterval(function() {
	        activeMole(mole[i]);
	        i++;
	        if(moleHole.length == 100) {
	            clearInterval(intervalId);
	        }
	    randomMoleHoleToSequence();
		compareClick();
	    
	    }, 800);
	}

	function compareClick(){
		if ($(this).hasClass('mole')){
			whacked++;
			$('#whacked').text('Moles Whacked # ' + whacked + '!');
		}else{
			console.log('missed');
		}
	}
});