import React, { FC } from 'react'
import { ImagePlaceholder } from 'components/icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type ImageProps = {
  url: string | undefined,
  alt: string,
}

const Image: FC<ImageProps> = ({ url, alt }) => {
  if (!url) {
    return <ImagePlaceholder className="image -placeholder" />
  }

  return <LazyLoadImage alt={alt} className="image" loading="lazy" src={url} />
}

export default Image
