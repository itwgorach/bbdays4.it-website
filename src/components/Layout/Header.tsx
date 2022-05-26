import React, { FC, useState } from 'react'
import { isDesktop } from 'react-device-detect'

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
  if (isDesktop) {
    return <DesktopHeader links={linksData} />
  }

  return <MobileHeader links={linksData} />  
}

export default Header
