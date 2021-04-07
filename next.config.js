module.exports = {
	i18n: {
		locales: ['cs', 'en'],
		defaultLocale: 'cs'
	},
	async rewrites() {
		return [
			{
				source: '/cs/o-nas',
				destination: '/about',
				locale: false
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/cs/about',
				destination: '/o-nas',
				locale: false,
				permanent: false
			}
		]
	}
};
