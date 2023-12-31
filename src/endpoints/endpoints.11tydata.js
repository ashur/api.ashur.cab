module.exports = {
	date: "git Last Modified",
	layout: "layouts/endpoint.json.njk",

	eleventyComputed: {
		permalink: ( data ) =>
		{
			const { page } = data;

			const pathname = page.filePathStem
				.replace( "/endpoints", "" )
				.replace( /\/index$/, "" );

			return `${pathname}.json`;
		},

		response: ( data ) =>
		{
			const { deprecated, page, permalink, response, version } = data;

			if ( !permalink )
			{
				return;
			}

			let payload = {};
			if( Array.isArray( response ) )
			{
				const endpointSlug = permalink
					.split( "/" )[1]
					.split( "." )[0];

				payload[endpointSlug] = response;
			}
			else
			{
				payload = { ...response };
			}

			payload.deprecated = deprecated;
			payload.updated = page.date;
			payload.url = new URL( data.site.url );
			payload.url.pathname = permalink;
			payload.version = version;

			return payload;
		},
	},
};
