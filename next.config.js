const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  env: {
    MAILCHIMP: "https://gmail.us6.list-manage.com/subscribe/post?u=b5a364d718e2517a601832a42&amp;id=58bbc3cd7c"
      },
})
