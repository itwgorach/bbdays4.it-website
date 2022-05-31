import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'

import React, { FC } from 'react'
import GalleryType from 'types/GalleryType'
import GalleryDataType from 'types/GalleryDataType'

const swiperOptions = {
    slidesPerView: 1.4,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
}

const MobileGallery: FC<GalleryType> = ({galleryData}: GalleryType) => {
  return (
    <div className="gallery">
      <h3 className='gallery__heading'>#BBDays4IT</h3>
      <Swiper {...swiperOptions} className='gallery__swiper'>
        {galleryData.map((item: GalleryDataType) => (
            <SwiperSlide key={item.id} className="gallery__slide">
                <img src={item.link} alt="gallery" className='gallery__slide-image' loading='lazy' />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MobileGallery
