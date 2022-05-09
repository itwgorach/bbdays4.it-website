import React from 'react'

import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <Link to="/partners">Partnerzy</Link><br />
      <Link to="/posts">Posty</Link><br />
      <Link to="/speakers">Speakerzy</Link>
    </div>
  )
}

export default IndexPage