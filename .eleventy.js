const addRemoteData = require( "@aaashur/eleventy-plugin-add-remote-data" );
const markdown = require( "./src/_eleventy/config/markdown" );

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


	/* Filters */
	const { filters } = require( "./src/_eleventy/filters" );
	Object.entries( filters ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addFilter( key, require( value ) );
	} );


	/* Markdown */
	eleventyConfig.setLibrary( "md", markdown );


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
