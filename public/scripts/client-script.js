var roundCount = 1;

var startGame = function() {
	$.ajax({
		url: '/api',
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
	// Someone wins
};

var submitGuess = function() {

};

var restartGame = function() {

};

var setStatus = function( player, status ) {
	return $( '.player'+ player + ' div[class^="status-"]' ).removeClass().addClass( 'status-' + status );
};

$(document).ready(function() {
	$( '.btn-start' ).on( 'click', startGame );
	$( '.btn-abort' ).on( 'click', abortGame );
	$( '.btn-restart' ).on( 'click', restartGame );
	$( '.btn-guess' ).on( 'click', submitGuess );
});