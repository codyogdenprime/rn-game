var express = require( 'express' ); // Require Express Module

var app = express();

var path = require( 'path' );

var bodyParser = require( 'body-parser' );

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen( 3000, "localhost", function() {
	console.log( "Lisening on port 3000" );
} );

app.get( '/', function( req, res ) {
	console.log( "Hello, world!" );
	res.sendFile( path.resolve( 'public/index.html' ) );
} );

app.use( express.static( 'public' ) );
app.use( express.static( 'node_modules/jquery/dist' ) );
app.use( express.static( 'node_modules/normalize.css' ) );