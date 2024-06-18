import React, { FC } from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData: LinkType[] = [
  // {
  //   name: 'Dołącz do nas',
  //   path: '#dolaczdonas',
  // },
  {
    name: 'Prelegenci',
    path: '#prelegenci',
  },
  {
    name: 'Harmonogram',
    path: '#harmonogram',
  },
  {
    name: 'Agenda UBB',
    path: '#agenda',
  },
  {
    name: 'Festiwal w liczbach',
    path: '#festiwal_w_liczbach',
  },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'Edycja 2023',
    path: 'https://2023.bbdays4.it/',
  },
]

const linksDataMobile: LinkType[] = [
  {
    name: 'Prelegenci',
    path: '#prelegenci',
  },
  {
    name: 'Harmonogram',
    path: '#harmonogram',
  },
  {
    name: 'Agenda',
    path: '#agenda',
  },
  {
    name: 'Festiwal w liczbach',
    path: '#festiwal_w_liczbach',
  },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'Edycja 2023',
    path: 'https://2023.bbdays4.it/',
  },
]

type HeaderProps = {
  pathname: string
}

const Header: FC<HeaderProps> = ({ pathname }) => {
  return (
    <>
      <DesktopHeader links={linksData} pathname={pathname} />
      <MobileHeader links={linksDataMobile} />
    </>
  )
}

export default Header
