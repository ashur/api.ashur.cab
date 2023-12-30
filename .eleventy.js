const addRemoteData = require( "@aaashur/eleventy-plugin-add-remote-data" );

/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	/* Collections */
	const { collections } = require( "./src/_eleventy/collections" );
	Object.entries( collections ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addCollection( key, require( value ) );
	} );


	/* Data Extensions */
	const { dataExtensions } = require( "./src/_eleventy/dataExtensions" );
	Object.entries( dataExtensions ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addDataExtension( key, require( value ) );
	} );

	/* Plugins */
	eleventyConfig.addPlugin( addRemoteData, {
		data: {},
	} );

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
