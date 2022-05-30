import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/scss'

import { PartnerEdgeType } from 'types'
import Partner from './Partner'
import { graphql, useStaticQuery } from 'gatsby'

const swiperOptions = {
  modules: [Autoplay],
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
    1200: {
      slidesPerView: 4.6,
      spaceBetween: 150,
    }
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
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
          {data.allStrapiPartner.edges.map(({node}: PartnerEdgeType) => {
            return (
              <SwiperSlide key={node.id}>
                <Partner partner={{ ...node }} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
