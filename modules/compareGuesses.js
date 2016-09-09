var compareGuesses = function(arrayGuesses, gameNumber){
  for (var i = 0; i < arrayGuesses.length; i++) {
    arrayGuesses[i].percentage = arrayGuesses[i].guess / gameNumber;
  }
  return arrayGuesses;
};

module.exports = compareGuesses;
