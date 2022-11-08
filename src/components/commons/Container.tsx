interface IProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export const Container = ({ children, className }: IProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={`container px-5 md:border md:border-blueDark md:rounded-lg md:p-5 md:mx-20 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
