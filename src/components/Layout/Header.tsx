import React, { FC } from 'react'

import { c4pUrl } from 'constants/constants'
import { useLanguageContext } from 'contexts/LanguageContext'
import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const plLinksData: LinkType[] = [
  // {
  //   name: 'Nagrania',
  //   path: 'nagrania',
  // },
  // {
  //   name: 'Prelegenci',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Harmonogram',
  //   path: '#harmonogram',
  // },
  // {
  //   name: 'Agenda UBB',
  //   path: '#agenda',
  // },
  // {
  //   name: 'Festiwal w liczbach',
  //   path: '#festiwal_w_liczbach',
  // },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'C4P',
    path: c4pUrl,
  },
  {
    name: 'Edycja 2024',
    path: 'https://2024.bbdays4.it/',
  },
]

const enLinksData: LinkType[] = [
  // {
  //   name: 'Videos',
  //   path: 'nagrania',
  // },
  // {
  //   name: 'Speakers',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Schedule',
  //   path: '#harmonogram',
  // },
  // {
  //   name: 'Agenda UBB',
  //   path: '#agenda',
  // },
  // {
  //   name: 'Festival in numbers',
  //   path: '#festiwal_w_liczbach',
  // },
  {
    name: 'Organizers',
    path: '#organizatorzy',
  },
  {
    name: 'C4P',
    path: c4pUrl,
  },
  {
    name: 'Edition 2024',
    path: 'https://2024.bbdays4.it/',
  },
]

const plLinksDataMobile: LinkType[] = [
  // {
  //   name: 'Nagrania',
  //   path: 'nagrania',
  // },
  // {
  //   name: 'Prelegenci',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Harmonogram',
  //   path: '#harmonogram',
  // },
  // {
  //   name: 'Agenda',
  //   path: '#agenda',
  // },
  // {
  //   name: 'Festiwal w liczbach',
  //   path: '#festiwal_w_liczbach',
  // },
  {
    name: 'Organizatorzy',
    path: '#organizatorzy',
  },
  {
    name: 'C4P',
    path: c4pUrl,
  },
  {
    name: 'Edycja 2024',
    path: 'https://2024.bbdays4.it/',
  },
]

const enLinksDataMobile: LinkType[] = [
  // {
  //   name: 'Videos',
  //   path: 'nagrania',
  // },
  // {
  //   name: 'Speakers',
  //   path: '#prelegenci',
  // },
  // {
  //   name: 'Schedule',
  //   path: '#harmonogram',
  // },
  // {
  //   name: 'Agenda',
  //   path: '#agenda',
  // },
  // {
  //   name: 'Festival in numbers',
  //   path: '#festiwal_w_liczbach',
  // },
  {
    name: 'Organizers',
    path: '#organizatorzy',
  },
  {
    name: 'C4P',
    path: c4pUrl,
  },
  {
    name: 'Edition 2024',
    path: 'https://2024.bbdays4.it/',
  },
]

type HeaderProps = {
  pathname: string
}

const Header: FC<HeaderProps> = ({ pathname }) => {
  const { language } = useLanguageContext()
  return (
    <>
      <DesktopHeader links={language === 'pl' ? plLinksData : enLinksData} pathname={pathname} />
      <MobileHeader links={language === 'pl' ? plLinksDataMobile : enLinksDataMobile} />
    </>
  )
}

export default Header
