module.exports = {
  webpack5: true,
  async redirects() {
    return [
      {
        source: '/design',
        destination: '/Selected-Works-By-Areeb-Rasul.pdf',
        permanent: false
      },
      {
        source: '/work',
        destination: '/Areeb Rasul Resume.pdf',
        permanent: false
      },
    ]
  },
}
