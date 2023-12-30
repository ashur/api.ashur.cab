/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
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
