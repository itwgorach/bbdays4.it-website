import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/scss'

import React, { FC } from 'react'

import { GalleryNextButton, GalleryPrevButton } from 'components/icons'
import { BaseGalleryType } from 'types'

const swiperOptions = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      centeredSlides: false,
      slidesPerGroup: 3,
      slidesPerView: 3,
      slideToClickedSlide: false,
    },
  },
  centeredSlides: true,
  loop: true,
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: '#gallery-next-slide',
    prevEl: '#gallery-prev-slide',
  },
  slidesPerView: 1.4,
  slideToClickedSlide: true,
  spaceBetween: 30,
}

const Gallery: FC<BaseGalleryType> = ({ images }) => (
  <div className="gallery">
    <h3 className="gallery__heading">#BBDays4IT</h3>
    <Swiper {...swiperOptions} className="gallery__swiper">
      {images &&
        images.map((image) => (
          <SwiperSlide key={image?.id} className="gallery__slide">
            <img alt="gallery" className="gallery__slide-image" src={image?.url} />
          </SwiperSlide>
        ))}
    </Swiper>
    <div className="gallery__navigation-buttons">
      <GalleryPrevButton id="gallery-prev-slide" />
      <GalleryNextButton id="gallery-next-slide" />
    </div>
  </div>
)

export default Gallery
