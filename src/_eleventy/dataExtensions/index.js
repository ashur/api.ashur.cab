const path = require( "path" );

/* eslint-disable quote-props */
module.exports.dataExtensions = {
	"yml": path.join( __dirname, "yaml.js" ),
};
