import React, { FC, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData = [
  {
    name: 'Organizatorzy',
    path: '/',
  },
  {
    name: 'Galeria',
    path: '/',
  },
  {
    name: 'Edycja 2021',
    path: '/',
  },
  {
    name: 'Edycja 2020',
    path: '/',
  },
  {
    name: 'Edycja 2019',
    path: '/',
  },
]

const Header: FC = () => {
  const [mobile, setMobile] = useState()

  useEffect(() => {
    setMobile(isMobile)
  }, [setMobile])

  if(mobile) {
    return <MobileHeader links={linksData} />
  }

  return <DesktopHeader links={linksData} />
}

export default Header
