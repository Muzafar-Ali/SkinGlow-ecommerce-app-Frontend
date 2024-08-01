const config = {
  baseUri: process.env.NEXT_PUBLIC_BASEURI,
  algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  algoliaApiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
  algoliaIndexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  strapiApiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
};

export default config;