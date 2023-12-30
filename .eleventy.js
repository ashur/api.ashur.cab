const robots = require( "./src/robots.txt.js" );

/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	eleventyConfig.addGlobalData( "robots", robots );
	/* Data Extensions */
	const { dataExtensions } = require( "./src/_eleventy/dataExtensions" );
	Object.entries( dataExtensions ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addDataExtension( key, require( value ) );
	} );

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
