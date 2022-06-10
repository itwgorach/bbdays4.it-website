import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData: LinkType[] = [
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  // {
  //   name: 'Galeria',
  //   path: '/',
  // },
  {
    name: 'Edycja 2021',
    path: 'https://bbdays4it-2021.netlify.app/',
  },
  {
    name: 'Edycja 2020',
    path: 'https://bbdays4it-2020.netlify.app/',
  },
  {
    name: 'Edycja 2019',
    path: 'https://2019.bbdays4.it/',
  },
]

const Header = () => {
  if (useMediaQuery({ minWidth: 1224 })) {
    return <DesktopHeader links={linksData} />
  }
  return <MobileHeader links={linksData} />
}

export default Header
