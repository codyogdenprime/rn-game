var compareGuesses = function(guesses, gameNumber){
  for (var i in guesses) {
    guesses[i].rating = guesses[i].number / gameNumber;
  }
  return guesses;
};

module.exports = compareGuesses;
