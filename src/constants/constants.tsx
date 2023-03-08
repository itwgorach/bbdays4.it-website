import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from 'components/icons'
import { LinkType } from 'types'

export const socialLinks = [
  {
    href: 'https://www.facebook.com/bbdays4.it/',
    Icon: FacebookIcon,
    name: 'facebook',
  },
  {
    href: 'https://www.instagram.com/bbdays4.it/',
    Icon: InstagramIcon,
    name: 'instagram',
  },
  {
    href: 'https://www.linkedin.com/company/bbdays4it/', // linkedin href
    Icon: LinkedinIcon,
    name: 'linkedin',
  },
  {
    href: 'https://twitter.com/bbdays4',
    Icon: TwitterIcon,
    name: 'twitter',
  },
  {
    href: 'https://www.youtube.com/channel/UCVPN7WOmLWtwHm1lFzN8Q9A', // youtube href
    Icon: YoutubeIcon,
    name: 'youtube',
  },
]

export const footerLinks: LinkType[] = [
  {
    name: 'Konferencyjny kodeks postępowania',
    path: 'https://confcodeofconduct.com/index-pl.html',
  },
  {
    name: 'kontakt@bbdays4.it',
    path: 'mailto:kontakt@bbdays4.it',
  },
  {
    name: 'Regulamin Konferencji',
    path: 'regulamin',
  },
]

export const ImagePlaceholderUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 342' width='280' height='342'%3E%3Crect width='280' height='342' fill='%23359960'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23ffffff'%3EBrak zdjęcia%3C/text%3E%3C/svg%3E"

export const Hours = [
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
]

export const ScheduleWeek = [
  {
    dateDesktop: '08.09',
    dateMobile: '08',
    dayDesktop: 'Czwartek',
    dayMobile: 'Czw.',
  },
  {
    dateDesktop: '09.09',
    dateMobile: '09',
    dayDesktop: 'Piątek',
    dayMobile: 'Pt.',
  },
  {
    dateDesktop: '10.09',
    dateMobile: '10',
    dayDesktop: 'Sobota',
    dayMobile: 'Sob.',
  },
  {
    dateDesktop: '11.09',
    dateMobile: '11',
    dayDesktop: 'Niedziela',
    dayMobile: 'Ndz.',
  },
  {
    dateDesktop: '12.09',
    dateMobile: '12',
    dayDesktop: 'Poniedziałek',
    dayMobile: 'Pon.',
  },
  {
    dateDesktop: '13.09',
    dateMobile: '13',
    dayDesktop: 'Wtorek',
    dayMobile: 'Wt.',
  },
  {
    dateDesktop: '14.09',
    dateMobile: '14',
    dayDesktop: 'Środa',
    dayMobile: 'Śr.',
  },
  {
    dateDesktop: '15.09',
    dateMobile: '15',
    dayDesktop: 'Czwartek',
    dayMobile: 'Czw.',
  },
  {
    dateDesktop: '16.09',
    dateMobile: '16',
    dayDesktop: 'Piątek',
    dayMobile: 'Pt.',
  },
  {
    dateDesktop: '17.09',
    dateMobile: '17',
    dayDesktop: 'Sobota',
    dayMobile: 'Sob.',
  },
  {
    dateDesktop: '18.09',
    dateMobile: '18',
    dayDesktop: 'Niedziela',
    dayMobile: 'Ndz.',
  },
]

export const YoutubeLinks = [
  {
    date: 12,
    href: 'https://www.youtube.com/watch?v=kGxJ9mQ_QJw',
  },
  {
    date: 13,
    href: 'https://www.youtube.com/watch?v=IF69Ydv9sNQ',
  },
  {
    date: 14,
    href: 'https://www.youtube.com/watch?v=MojemUvWCYs',
  },
  {
    date: 15,
    href: 'https://www.youtube.com/watch?v=MhCoRQ-vvbc',
  },
  {
    date: 16,
    href: 'https://www.youtube.com/watch?v=hpd3NEP_M7Q',
  },
]

export const c4pUrl = 'https://selleo.typeform.com/to/XRHfxfrj'

export const breakpoints = {
  lg: '992px',
  md: '768px',
  sm: '576px',
  xl: '1200px',
  xs: '0px',
  xxl: '1600px',
}
