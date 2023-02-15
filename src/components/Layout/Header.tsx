import React, { FC } from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData: LinkDesktopProps[] = [
  {
    name: 'Dołącz do nas',
    path: '#dolaczdonas',
  },
  // {
  //   name: 'Prelegenci',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Harmonogram',
  //   path: '#harmonogram',
  // },
  // {
  //   name: 'Agenda ATH',
  //   path: '#agenda',
  // },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'Edycja 2022',
    path: 'https://2022-bbdays4it.netlify.app/',
  },
  // {
  //   name: 'Edycja 2020',
  //   path: 'https://bbdays4it-2020.netlify.app/',
  // },
  // {
  //   name: 'Edycja 2019',
  //   path: 'https://2019.bbdays4.it/',
  // },
]

const linksDataMobile: LinkType[] = [
  // {
  //   name: 'Prelegenci',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Harmonogram',
  //   path: '#harmonogram',
  // },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'Edycja 2022',
    path: 'https://2022-bbdays4it.netlify.app/',
  },
]

type HeaderProps = {
  pathname: string,
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
