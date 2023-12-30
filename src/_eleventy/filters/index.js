const path = require( "path" );

/* eslint-disable quote-props */
module.exports.filters = {
	"renderMarkdown": path.join( __dirname, "renderMarkdown.js" ),
};
