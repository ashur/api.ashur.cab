/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/TemplateCollection")} collectionApi
 */
module.exports = ( collectionApi ) =>
{
	return collectionApi
		.getFilteredByGlob( "src/endpoints/**/*.njk" )
		.sort( ( a, b ) =>
		{
			return a.url > b.url
				? 1
				: b.url > a.url
					? -1
					: 0;
		} );
};
