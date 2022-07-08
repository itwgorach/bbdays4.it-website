import React, { FC } from 'react'
import { ImagePlaceholder } from 'components/icons'

type ImageProps = {
  url: string | undefined,
  alt: string,
}

const Image: FC<ImageProps> = ({ url, alt }) => {
  const className = 'image'

  return url ? (
    <img alt={alt} className={className} loading="lazy" src={url} />
  ) : (
    <ImagePlaceholder className={className} />
  )
}

export default Image
