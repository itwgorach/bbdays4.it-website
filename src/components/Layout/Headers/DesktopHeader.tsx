import React, { FC, useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'

import { BBDaysLogoLight } from 'components/icons'
import classnames from 'classnames'
import { LinkType, HeaderType } from 'types'

const DesktopHeader: FC<HeaderType> = ({links}) => {
  const [hasNavbarBackground, setHasNavbarBackground] = useState(false)

  const onScroll = useCallback(() =>{
    if (window.scrollY > 1) {
      setHasNavbarBackground(true)
    } else {
      setHasNavbarBackground(false)
    }
  },[])
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header key='desktop-header' className={classnames('header-desktop', {'-colored': hasNavbarBackground})}>
      <Link to='/'>
          <BBDaysLogoLight className="header-desktop__logo" />
      </Link>
      <div className="header-desktop__nav">
        {links.map((link: LinkType, index: number) => (
          <Link key={index} to={link.path} className="header-desktop__link">
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default DesktopHeader
