var totalPlayers = $('option').value;//selected number of players
var roundCount = 0;

var startGame = function() {
	$.ajax({
		url: '/ready',
		type: 'post',
		dataType: 'json',
		data: {
			max: $("#maxnum").val()
		},
	})
	.done( function( data ) {
		console.log( 'Data:', data );
	});
/*	for ( var i = 0; i < 6; i++ ) {
		var div = $("<div />", { class: "container" + i});
			div.html( '<h2>Player ' + ( i + 1 ) + '</h2><input type="number" /><div class="status-1"></div>' );
		$(".container").append( div );
	}*/
	for ( var i = 0; i < $("#player-count").val(); i++ ) {

		var div = $("<div />", { class: "player-" + ( i + 1 ) } );
		var h2 = $("<h2 />").html( "Player " + ( i + 1 ) );
		var input = $("<input />").attr("type", "number");
		var status = $("<div />", { class: "status-1" } );

		div.data("index", ( i + 1 ) );
		div.append( h2 );
		div.append( input );
		div.append( status );
		$(".container").append( div );
	}
	$("#startscreen").hide();
	$(".container").show();
	$("main").show();
	$(".setup-mode").hide();
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

	$("#startscreen").show();
	$(".container").hide();
	$(".container").empty();
	$(".setup-mode").show();

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
				alert( "YOU WIN: Player" + data[item].player );
				$(".btn-abort").hide();
				return false;
			}
		}
		$( 'div[class^=player-]' ).children("input").attr("disabled", false);
		totalRounds();
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
  };
  $('body').on('click', '.submitName', function(){
    //store player name
  var names = document.getElementsByClassName('playerName').value;
  // var names = document.getElementById('playerName').value;
    $('.playerName').each(function(){
       playerNameArray.push($( this ).val());

       });




    console.log(playerNameArray);
    // console.log('names submitted', playerNameArray);
  });
};
