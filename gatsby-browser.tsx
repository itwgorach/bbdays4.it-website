const React = require('react')

const Layout = require('components/Layout').default
require('styles/app.scss')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// trigger an immediate page refresh when an update is found
exports.onServiceWorkerUpdateReady = () => window.location.reload()
