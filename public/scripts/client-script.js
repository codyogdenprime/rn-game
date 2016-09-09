var totalPlayers = $('option').value;//selected number of players

var playerNameArray = [];//store names here
var roundCount = 1;

var startGame = function() {
	$.ajax({
		url: '/ready',
		type: 'post',
		dataType: 'json',
		data: {
			max: 100
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

	var guessData = new Object();

	$( 'div[class^=player-]' ).each( function() {
		var id = $( this ).data("index");
		var num = $( this ).children("input").val();
		$( this ).children("input").attr("disabled", true);
		guessData["player-" + id] = {
			number: $( this ).children("input").val(),
			player: Number( id )
		};
	});

	console.log( guessData );

	$.ajax({
		url: '/guess',
		type: 'post',
		dataType: 'json',
		data: {
			guesses: guessData
		}
	})
	.done( function( data ) {
		console.log( 'Data:', data );
		for( var item in data ) {
			console.log( "Rating:", Math.floor( data[item].rating * 100 ) );
			$( '.' + item ).children( 'div[class^="status-"]' ).removeClass().addClass( 'status-' + Math.floor( data[item].rating * 100 ) );
			if( data[item].rating === 1 ) {
				// Winner Winner Chicken Dinner
				alert( "YOU WIN!" );
				return false;
			}
		}
		$( 'div[class^=player-]' ).children("input").attr("disabled", false);
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

$(document).ready(function(){
  //name 'submit'

});

var addNames = function(totalPlayers){
  console.log('Selected Number of Players:', totalPlayers);
  //empty div
  $('.nameIn').empty();
if (totalPlayers === '-') {
    alert('Please Select Number of Players');
} else {
  //append name forms based on selected # of players
    for (var i = 0; i < totalPlayers; i++) {
        $('.nameIn').append('<input type="text" class="playerName" placeholder="Player Name"></input>');
    };
  //add button for submitting all names at once
    $('.nameIn').append('<button class="submitName">Submit</button')
  };
  $('body').on('click', '.submitName', function(){
    //store player name
  var names = document.getElementsByClassName('playerName').value;
  // var names = document.getElementById('playerName').value;
    $('.playerName').each(function(){
       playerNameArray.push(names);

       })



    console.log(playerNameArray);
    // console.log('names submitted', playerNameArray);
  });
};
