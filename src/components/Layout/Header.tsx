import React, { FC } from 'react'
import { isMobile } from 'react-device-detect'

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
  if (isMobile) {
  }

  return <DesktopHeader links={linksData} />
}

export default Header
