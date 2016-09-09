var compareGuesses = function( body, gameNumber){

	for ( var i in body.data ) {
		console.log( body.data[i] );
		body.data[i].rating = 1;
		console.log( body.data[i].rating );
		console.log( "Changed:", body.data[i] );
	}

};

module.exports = compareGuesses;
