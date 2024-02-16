module.exports = {
  webpack5: true,
  async redirects() {
    return [
      {
        source: '/design',
        destination: '/Selected Works By Areeb Rasul.pdf',
        permanent: false
      },
    ]
  },
}
