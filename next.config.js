module.exports = {
    async redirects() {
      return [
        {
          source: '/tmp',
          destination: '/kamboja',
          permanent: true,
        },
      ]
    },
  }