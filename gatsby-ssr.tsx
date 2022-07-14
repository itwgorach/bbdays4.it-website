const React = require('react')

const Layout = require('components/Layout').default
require('styles/app.sass')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
