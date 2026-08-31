const React = require('react')

const Layout = require('components/Layout').default
require('styles/app.scss')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <meta
      key="facebook-domain-verification"
      content="zluck9c7cjvyxfiouq5wlmcpbw7ogv"
      name="facebook-domain-verification"
    />,
    <script
      key="fb-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1376607440681911');
          fbq('track', 'PageView');
        `,
      }}
    />,
  ])
  setPostBodyComponents([
    <noscript key="fb-pixel-noscript">
      <img
        alt=""
        height="1"
        src="https://www.facebook.com/tr?id=1376607440681911&ev=PageView&noscript=1"
        style={{ display: 'none' }}
        width="1"
      />
    </noscript>,
  ])
}
