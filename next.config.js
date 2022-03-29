module.exports = {
  generateEtags: false,
  async headers() {
  return [
    {
      source: '/:all',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache',
        }
      ],
    },
  ]
},
}
