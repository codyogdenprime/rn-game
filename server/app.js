var express = require( 'express' ); // Require Express Module

var harrypotter = express();

var path = require( 'path' );

var bodyParser = require( 'body-parser' );

var urlencodedParser = bodyParser.urlencoded({extended: false});

harrypotter.listen( 3000, "localhost", function() {
	console.log( "I'm listening again." );
} );

harrypotter.get( '/', function( req, res ) {
	console.log( "Harry Potter Lives!" );
	res.sendFile( path.resolve( 'public/index.html' ) );
} );

harrypotter.use( express.static( 'public' ) );