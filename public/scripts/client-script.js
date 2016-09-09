var roundCount = 1;

var startGame = function() {
	$.ajax({
		url: '/ready',
		type: 'post',
		dataType: 'json',
		data: {
			max: 10
		},
	})
	.done( function( data ) {
		console.log( 'Data:', data );
	});
};

var totalRounds = function() {
	roundCount++;
	$( '.total-rounds' ).html( roundCount );
	return console.log( "Current Round:", roundCount );
};

var abortGame = function() {
	// Someone clicks abort button
	var abortCheck = confirm("Are you sure you'd like to abort?");

	if( !abortCheck ) return false;

};

var endGame = function() {
	$.ajax({
		url: '/end',
		type: 'post',
		dataType: 'json',
		data: {
			action: "start",
		},
	})
	.done( function( data ) {
		console.log( 'Data:', data );
	});
};

var submitGuess = function( something ) {
	$.ajax({
		url: '/guess',
		type: 'post',
		dataType: 'json',
		data: {
			name: "Hello world"
		}
	})
	.done( function( data ) {
		console.log( 'Data:', data );
	});
};

var restartGame = function() {
	$.ajax({
		url: '/ready',
		type: 'post',
		dataType: 'json',
		data: {
			action: "start",
		},
	})
	.done( function( data ) {
		console.log( 'Data:', data );
	});
};	

var setStatus = function( player, status ) {
	return $( 'div.player-' + player + ' div[class^="status-"]' ).removeClass().addClass( 'status-' + ( status * 100 ) );
};

$(document).ready(function() {
	$( '.btn-start' ).on( 'click', startGame );
	$( '.btn-abort' ).on( 'click', abortGame );
	$( '.btn-restart' ).on( 'click', restartGame );
	$( '.btn-guess' ).on( 'click', submitGuess );
});