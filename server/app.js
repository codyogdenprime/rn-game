var express = require( 'express' ); // Require Express Module
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded({extended: false});
var randomNumbers = require('../modules/randomNumbers');
var compareGuesses = require('../modules/compareGuesses');
var gameNumber;

app.listen( 3000, "localhost", function() {
	console.log( "I'm listening again." );
} );

app.get( '/', function( req, res ) {
	console.log( "index sent to client" );
	res.sendFile( path.resolve( 'public/index.html' ) );
} );

app.use( express.static( 'public' ) );

app.post('/ready', urlencodedParser, function(req, res){
	console.log('ready to play');
	gameNumber = randomNumbers(0, req.body.max);
	var readyObject = {readyForGuess: true};
	res.send(readyObject);
});

app.post('/guess', urlencodedParser, function(req, res){
	console.log('guesses made');
	var finishedArray = compareGuesses(req.body.data, guessNumber);
	res.send(finishedArray);
});
