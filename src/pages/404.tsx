import * as React from 'react'
import { Link } from 'gatsby'

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: '96px',
}
const headingStyles = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  backgroundColor: '#FFF4DB',
  borderRadius: 4,
  color: '#8A6534',
  fontSize: '1.25rem',
  padding: 4,
}

// markup
const NotFoundPage = () => {
  React.useEffect(() => {
    document.querySelector('.layout').style.backgroundColor = 'white'
    const vh = window.innerHeight
    document.getElementById('footer').style.cssText = `
      position: ${vh < 550 ? 'relative' : 'absolute'};
      bottom: 0px;
      left: 0;
      right: 0;
    `
  }, [])

  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span aria-label="Pensive emoji" role="img">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
