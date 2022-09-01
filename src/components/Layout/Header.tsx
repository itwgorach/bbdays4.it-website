import React, { FC } from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

type LinkDesktopProps = LinkType & {
  subtitle: string | null,
}

const linksData: LinkDesktopProps[] = [
  {
    name: 'Dołącz do nas',
    path: '#dolaczdonas',
    subtitle: null,
  },
  {
    name: 'Prelegenci',
    path: '#prelegenci',
    subtitle: null,
  },
  {
    name: 'Harmonogram',
    path: '#harmonogram',
    subtitle: null,
  },
  {
    name: 'Agenda',
    path: '#agenda',
    subtitle: 'ATH',
  },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
    subtitle: null,
  },
  {
    name: 'Edycja 2021',
    path: 'https://bbdays4it-2021.netlify.app/',
    subtitle: null,
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
  {
    name: 'Prelegenci',
    path: '#prelegenci',
  },
  {
    name: 'Harmonogram',
    path: '#harmonogram',
  },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'Edycja 2021',
    path: 'https://bbdays4it-2021.netlify.app/',
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
