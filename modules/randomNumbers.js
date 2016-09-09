var randomNumber = function(min, max){
  var generatedNumber = Math.floor((Math.random()*((max-min)+1))+min);
  console.log( "Gen Number:", generatedNumber );
  return Number( generatedNumber );
};

module.exports = randomNumber;
