var randomNumber = function(min, max){
  var generatedNumber = Math.floor((Math.random()*((max-min)+1))+min);
  return generatedNumber;
};

module.exports = randomNumber;
