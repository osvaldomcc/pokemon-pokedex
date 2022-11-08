import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'
import Pikachu from '@/assets/pikachu.svg'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  styles?: React.CSSProperties
  imgColor?: string
}

export const Card = ({
  children,
  className,
  styles,
  imgColor = Pikachu,
}: IProps) => {
  const [bgColor, setBgColor] = useState<string>('')

  useEffect(() => {
    const fac = new FastAverageColor()
    fac
      .getColorAsync(imgColor)
      .then((color) => {
        setBgColor(color.rgba)
      })
      .catch((err) => setBgColor('bg-blue-200'))
  }, [imgColor])

  return (
    <div
      className={`rounded-lg bg-blue-200 overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor ? bgColor : '', ...styles }}
    >
      {children}
    </div>
  )
}
