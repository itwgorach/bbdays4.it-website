import React, { FC, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

import { LinkType } from 'types'

const linksData: LinkType[] = [
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
  const isMobile = useMediaQuery({ maxWidth: 992 })

  if(isMobile) {
    return <MobileHeader links={linksData} />
  }
  
  return <DesktopHeader links={linksData} />
}

export default Header
