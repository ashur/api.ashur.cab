const markdownIt = require( "markdown-it" );

const options = {
	breaks: true,
	html: true,
	typographer: true,
};

const md = markdownIt( options )
	.disable( "code" );

module.exports = md;
