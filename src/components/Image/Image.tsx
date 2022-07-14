import React, { FC } from 'react'
import { ImagePlaceholder } from 'components/icons'

type ImageProps = {
  url: string | undefined,
  alt: string,
}

const Image: FC<ImageProps> = ({ url, alt }) => {
  if (!url) {
    return <ImagePlaceholder className="image -placeholder" />
  }

  return <img alt={alt} className="image" loading="lazy" src={url} />
}

export default Image
