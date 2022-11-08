import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface IProps {
  width: number
  height: number
  alt: string
  src: string
}

export const LazyImage = ({ width, height, alt, src }: IProps) => {
  return (
    <figure>
      <LazyLoadImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        effect="blur"
      />
    </figure>
  )
}
