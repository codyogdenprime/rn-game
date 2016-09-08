var roundCount = 1;

var startGame = function() {

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

$(document).ready(function() {
	$( '.btn-start' ).on( 'click', startGame );
	$( '.btn-abort' ).on( 'click', abortGame );
	$( '.btn-restart' ).on( 'click', restartGame );
	$( '.btn-guess' ).on( 'click', submitGuess );
});