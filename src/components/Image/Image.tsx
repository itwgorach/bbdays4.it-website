import React, { FC } from 'react'
import { ImagePlaceholderUrl } from '../../constants'

type ImageProps = {
  url: string | undefined,
  alt: string,
}

const Image: FC<ImageProps> = ({ url, alt }) => {
  const imageUrl = url ? url : ImagePlaceholderUrl

  return <img alt={alt} className="image" loading="lazy" src={imageUrl} />
}

export default Image
