import { Typography } from '@/components/commons'
import { LeftArrowIcon } from '@/components/icons'
import { IPokemonDetailProps } from '@/components/pokemon/PokemonDetail/PokemonDetailMeta'

interface IProps extends IPokemonDetailProps {
  onBackPress: () => void
}

export const PokemonDetailHeader = ({ pokemon, onBackPress }: IProps) => {
  return (
    <div className="flex items-center mb-5">
      <button className="text-blueDark md:hidden" onClick={onBackPress}>
        <LeftArrowIcon className="dark:text-gray-300" />
      </button>
      <div className="flex flex-1 mr-8 flex-col items-center md:mr-0 md:items-start">
        <Typography variant="h1" className="text-3xl">
          {pokemon?.name}
        </Typography>
        <Typography variant="h2" className="text-md">
          weight: {pokemon?.weight}
        </Typography>
      </div>
    </div>
  )
}
