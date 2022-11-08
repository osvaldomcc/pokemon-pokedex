type Variants = 'h1' | 'h2'

interface IProps {
  variant?: Variants
  className?: string
  styles?: React.CSSProperties
  children: React.ReactNode | React.ReactNode[]
}

const commonClasses: string = 'text-blueDark dark:text-gray-300'

export const Typography = ({
  variant,
  className,
  styles,
  children,
}: IProps) => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`font-bold text-2xl ${commonClasses} ${className}`}
          style={styles}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={`font-semibold text-md ${commonClasses} ${className}`}
          style={styles}
        >
          {children}
        </h2>
      )
    default:
      return (
        <p className={`${commonClasses} ${className}`} style={styles}>
          {children}
        </p>
      )
  }
}
