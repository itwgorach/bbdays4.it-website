import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/scss'

import React, { FC } from 'react'
import GalleryType from 'types/GalleryType'
import GalleryDataType from 'types/GalleryDataType'
import { GalleryNextButton, GalleryPrevButton } from 'components/icons'

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  navigation: {
    nextEl: '#gallery-next-slide',
    prevEl: '#gallery-prev-slide',
  },
}

const DesktopGallery: FC<GalleryType> = ({ galleryData }: GalleryType) => {
  let chunkedGalleryData = []
  for (let i = 0; i < galleryData.length; i += 3) {
    const chunk = galleryData.slice(i, i + 3)
    chunkedGalleryData.push(chunk)
  }

  return (
    <div className="gallery">
      <h3 className='gallery__heading'>#BBDays4IT</h3>
      <Swiper {...swiperOptions}>
        {chunkedGalleryData.map((item : GalleryDataType[], index: number) => (
          <SwiperSlide key={index} className="gallery__slide">
            <div className='gallery__slide-grid'>
              {item[0] && <img src={item[0]?.link} alt="photo" className='gallery__slide-image' loading='lazy' />}
              {item[1] && <img src={item[1]?.link} alt="photo" className='gallery__slide-image' loading='lazy' />}
              {item[2] && <img src={item[2]?.link} alt="photo" className='gallery__slide-image' loading='lazy' />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="gallery__navigation-buttons">
        <div id="gallery-prev-slide"><GalleryPrevButton className='gallery__button' /></div>
        <div id="gallery-next-slide"><GalleryNextButton className='gallery__button' /></div>
      </div>
    </div>
  )
}

export default DesktopGallery
