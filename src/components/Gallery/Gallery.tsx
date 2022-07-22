import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/scss'

import React, { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import {
  GalleryNextButton,
  GalleryPrevButton,
  GalleryNextButtonMobile,
  GalleryPrevButtonMobile,
} from 'components/icons'
import { BaseGalleryType } from 'types'

const swiperOptions: SwiperProps = {
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
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: '#gallery-next-slide',
    prevEl: '#gallery-prev-slide',
  },
  rewind: true,
  slidesPerView: 1.4,
  slideToClickedSlide: true,
  spaceBetween: 8,
}

const Gallery: FC<BaseGalleryType> = ({ images }) => (
  <div className="gallery">
    <h3 className="gallery__heading">#BBDays4IT</h3>
    <div className="gallery__wrapper">
      <Swiper {...swiperOptions} className="gallery__swiper">
        {images &&
          images.map((image) => (
            <SwiperSlide key={image?.id} className="gallery__slide">
              <LazyLoadImage
                src={`${image?.url?.substring(
                  0,
                  image?.url?.lastIndexOf('/') - 11,
                )}f_auto,q_auto/${image?.url?.substring(image?.url?.lastIndexOf('/') - 11)}`}
                className="gallery__slide-image"
              />
              {/* {console.log({
                xd: image?.url,
                xdd: `${image?.url?.substring(
                  0,
                  image?.url?.lastIndexOf('/') - 11,
                )}f_auto,q_auto/${image?.url?.substring(image?.url?.lastIndexOf('/') - 11)}`,
              })}
              <img
                alt="gallery"
                className="gallery__slide-image"
                src={`${image?.url?.substring(
                  0,
                  image?.url?.lastIndexOf('/') - 11,
                )}f_auto,q_auto/${image?.url?.substring(image?.url?.lastIndexOf('/') - 11)}`}
              /> */}
              {/* <img alt="gallery" className="gallery__slide-image" src={image?.url} /> */}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="gallery__navigation-buttons-mobile">
        <GalleryPrevButtonMobile id="gallery-prev-slide" />
        <GalleryNextButtonMobile id="gallery-next-slide" />
      </div>
    </div>
    <div className="gallery__navigation-buttons">
      <GalleryPrevButton id="gallery-prev-slide" />
      <GalleryNextButton id="gallery-next-slide" />
    </div>
  </div>
)

export default Gallery
