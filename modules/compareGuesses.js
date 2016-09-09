var compareGuesses = function(guesses, gameNumber){
  for (var i in guesses) {
  	var given = Number( guesses[i].number );
  	var num = Number( gameNumber );
	var abs;

	if( num - given > 0 ) {
		abs = given / num;
	} else {
		abs = ( num - ( Math.abs( num - given ) ) ) / num;
	}

    guesses[i].rating = abs;
  }
  return guesses;
};

module.exports = compareGuesses;
