import { c4pUrl } from 'constants/constants'
import React, { FC } from 'react'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const linksData: LinkDesktopProps[] = [
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
    name: 'Edycja 2022',
    path: 'https://2022.bbdays4.it/',
  },
  // {
  //   name: 'Edycja 2020',
  //   path: 'https://bbdays4it-2020.netlify.app/',
  // },
  // {
  //   name: 'Edycja 2019',
  //   path: 'https://2019.bbdays4.it/',
  // },
  // {
  //   name: 'Zostań prelegentem',
  //   path: c4pUrl,
  //   special: true,
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
    name: 'Edycja 2022',
    path: 'https://2022.bbdays4.it/',
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
