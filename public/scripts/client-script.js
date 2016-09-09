console.log( "client-script is sourced" );

var totalPlayers = $('option').value;//selected number of players

var playerNameArray = [];//store names here

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
