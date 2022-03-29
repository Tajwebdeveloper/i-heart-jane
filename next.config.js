module.exports = {
  generateEtags: false,
  async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=-1, must-revalidate',
        }
      ],
    },
  ]
},
}
