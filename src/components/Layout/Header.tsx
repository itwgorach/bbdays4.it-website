import React from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData: LinkType[] = [
  {
    name: 'Harmonogram',
    path: '#harmonogram',
  },
  {
    name: 'Prelegenci',
    path: '#prelegenci',
  },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
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
  return (
    <>
      <DesktopHeader links={linksData} />
      <MobileHeader links={linksData} />
    </>
  )
}

export default Header
