var express = require( 'express' ); // Require Express Module

var app = express();

var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded({extended: true});
var randomNumbers = require('../modules/randomNumbers');
var compareGuesses = require('../modules/compareGuesses');
var gameNumber;

app.listen( 3000, "localhost", function() {
	console.log( "Lisening on port 3000" );
} );

app.get( '/', function( req, res ) {

	console.log( "index sent to client" );
	res.sendFile( path.resolve( 'public/index.html' ) );
} );

app.use( express.static( 'public' ) );
app.use( express.static( 'node_modules/jquery/dist' ) );

app.post('/ready', urlencodedParser, function(req, res){
	console.log('ready to play');
	gameNumber = randomNumbers(0, req.body.max);
	var readyObject = {readyForGuess: true};
	res.send(readyObject);
});

app.post('/guess', urlencodedParser, function(req, res){

	console.log( req.body.guesses );

	console.log( "type:", typeof req.body.guesses );

	var myob = req.body.guesses;

	for ( var i in myob ) {
		myob[i].rating = 1;
	}

	res.send( myob );


});
app.use( express.static( 'node_modules/normalize.css' ) );
