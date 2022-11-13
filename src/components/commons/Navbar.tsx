import { useNavigate } from 'react-router-dom'

import PokeIcon from '@/assets/pokeicon.png'
import { LazyImage } from '@/components/commons/LazyImage'
import { SwitchTheme } from '@/components/commons'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleHome = () => navigate('/', { preventScrollReset: true })
  return (
    <nav className="hidden md:block bg-blueLigth text-white h-14 sticky top-0 z-30 dark:bg-blueDark">
      <div className="flex justify-center items-center pt-2">
        <div className="container">
          <div className="flex items-center justify-between px-10">
            <button onClick={handleHome}>
              <LazyImage
                width={35}
                height={35}
                alt="poke-icon"
                src={PokeIcon}
              />
            </button>
            <SwitchTheme />
          </div>
        </div>
      </div>
    </nav>
  )
}
