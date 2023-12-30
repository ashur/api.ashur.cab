module.exports = {
	layout: "layouts/endpoint.njk",
	published: new Date(),
	tags: ["endpoints"],

	eleventyComputed: {
		permalink: ( data ) =>
		{
			return `/${data.page.fileSlug}.json`;
		},
	},
};
