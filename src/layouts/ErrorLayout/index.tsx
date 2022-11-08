import { useNavigate } from 'react-router-dom'

import { LazyImage } from '@/components/commons'
import Pikachu from '@/assets/pikachu.svg'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

export const ErrorLayout = ({ children }: IProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/', { preventScrollReset: true })
  }
  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div className="flex flex-col items-center">
        <div className="mb-5">
          <LazyImage width={150} height={150} alt="pikachu" src={Pikachu} />
        </div>
        {children}
        <button
          onClick={handleClick}
          className="border-2 border-blueDark px-4 py-1 mt-2 rounded bg-blueLigth text-white hover:bg-blueDark transition-all"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}
