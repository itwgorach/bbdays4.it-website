import React, { FC } from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

interface IHeader {
  isDesktop: boolean;
}

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

const Header: FC<IHeader> = ({ isDesktop }) => {
  if (isDesktop) {
    return <DesktopHeader links={linksData} />
  } else {
    return <MobileHeader links={linksData} />
  }
}

export default Header
