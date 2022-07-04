import React, { FC } from 'react'

type ImageProps = {
  url: string | undefined,
  alt: string,
}

const Image: FC<ImageProps> = ({ url, alt }) => {
  return url ? (
    <img alt={alt} className="image" loading="lazy" src={url} />
  ) : (
    <div className="image-empty">Brak zdjęcia</div>
  )
}

export default Image
