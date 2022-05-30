import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/scss'

import { PartnerType } from 'types'
import Partner from './Partner'

const swiperOptions = {
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
    },
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  modules: [Autoplay],
  speed: 5000,
}

type PartnersType = {
  partners: PartnerType[],
  sectionTitle: string,
}

const Partners: FC<PartnersType> = ({ partners, sectionTitle }) => (
  <div className="partners" id={sectionTitle.toLowerCase()}>
    <div className="partners__inner">
      <h1 className="partners__header">{sectionTitle}</h1>
      <Swiper className="partners__swiper" {...swiperOptions}>
        {partners?.map((partner: PartnerType) => (
          <SwiperSlide key={partner.id}>
            <Partner partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

export default Partners
