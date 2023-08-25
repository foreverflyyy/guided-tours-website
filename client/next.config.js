const nextConfig = {
	images: {
		unoptimized: true,
		domains: [],
	},
	env: {
    API_KEY: process.env.API_TOKEN,
    SERVER_URL: process.env.API_URL,
		CLIENT_URL: process.env.CLIENT_URL,
		INTERNAL_API_URL: process.env.INTERNAL_API_URL,
	},
};

if (process.env.NODE_ENV === 'development') {
  console.log('info  - lanUrl:', `http://${require('address').ip()}:3000`);
}

module.exports = nextConfig;
