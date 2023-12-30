const md = require( "../config/markdown.js" );

module.exports = ( markdown ) => (
	typeof markdown === "string"
		? md.render( markdown )
		: ""
);
