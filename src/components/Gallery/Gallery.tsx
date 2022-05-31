import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/scss'

import React, { FC } from 'react'

import { GalleryNextButton, GalleryPrevButton } from 'components/icons'
import GalleryDataType from 'types/GalleryDataType'

const dummyGalleryData = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    url: 'https://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 10,
    url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 11,
    url: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1.4,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: '#gallery-next-slide',
    prevEl: '#gallery-prev-slide',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
}

const Gallery: FC = () => {
  return (
    <div className="gallery">
      <h3 className="gallery__heading">#BBDays4IT</h3>
      <Swiper {...swiperOptions} className="gallery__swiper">
        {dummyGalleryData.map((item: GalleryDataType) => (
          <SwiperSlide key={item.id} className="gallery__slide">
            <img src={item.url} alt="gallery" className="gallery__slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="gallery__navigation-buttons">
        <GalleryPrevButton id="gallery-prev-slide" />
        <GalleryNextButton id="gallery-next-slide" />
      </div>
    </div>
  )
}

export default Gallery
