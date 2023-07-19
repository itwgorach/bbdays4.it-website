import React, { FC } from 'react'
import { ImagePlaceholder } from 'components/icons'

type ImageProps = {
  url: string | undefined,
  alt: string,
  style?: React.CSSProperties,
}

const Image: FC<ImageProps> = ({ url, alt, style }) => {
  if (!url) {
    return <ImagePlaceholder className="image -placeholder" />
  }

  return <img alt={alt} className="image" loading="lazy" src={url} style={style} />
}

export default Image
