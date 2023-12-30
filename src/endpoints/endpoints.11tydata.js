module.exports = {
	date: "git Last Modified",
	layout: "layouts/endpoint.njk",
	published: new Date(),

	eleventyComputed: {
		permalink: ( data ) =>
		{
			const { page } = data;

			const pathname = page.filePathStem.replace( "/endpoints", "" );
			return `/${pathname}.json`;
		},
	},
};
