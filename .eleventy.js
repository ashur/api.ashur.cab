const robots = require( "./src/robots.txt.js" );

/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	eleventyConfig.addGlobalData( "robots", robots );

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
