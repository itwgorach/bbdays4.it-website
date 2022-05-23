import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/scss'

import { PartnerType } from 'types'
import Partner from './Partner'
import { graphql, useStaticQuery } from 'gatsby'
import { getPartnerWhiteLogo } from 'utils/getPartnerWhiteLogo'

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.6,
      spaceBetween: 34,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 4.2,
      spaceBetween: 125,
    },
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  draggable: true,
}

const Partners: FC = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPartner {
        edges {
          node {
            id
            Name
            WebsiteURL
            Logo {
              url
            }
            whiteLogo {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div className="partners">
      <div className="partners__inner">
        <h1 className="partners__header">Organizatorzy</h1>
        <Swiper className="partners__swiper" {...swiperOptions}>
          {data.allStrapiPartner.edges.map(({ node }: PartnerType) => {
            const whiteLogo = getPartnerWhiteLogo(node)
            return (
              <SwiperSlide key={node.id}>
                <Partner Name={node.Name} Logo={node.Logo} WebsiteURL={node.WebsiteURL}  whiteLogo={whiteLogo} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
