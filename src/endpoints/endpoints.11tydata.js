module.exports = {
	layout: "layouts/endpoint.njk",
	published: new Date(),

	eleventyComputed: {
		permalink: ( data ) =>
		{
			return `/${data.page.fileSlug}.json`;
		},
	},
};
