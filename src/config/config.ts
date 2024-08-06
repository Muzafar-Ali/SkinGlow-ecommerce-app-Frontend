const config = {
  baseUri: process.env.NEXT_PUBLIC_BASEURI,
  algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  algoliaApiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
  algoliaIndexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
};

export default config;