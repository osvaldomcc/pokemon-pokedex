import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import { Card, LazyImage, Typography } from '@/components/commons'
import { Pokemon } from '@/types/pokemon'

interface IProps {
  pokemon: Pokemon
  className?: string
}

export const ListItemPokemon = ({ className, pokemon }: IProps) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  //Methods
  const handlePokemon = () => navigate(`/pokemon/${pokemon.name}`)
  const handleMouseEnter = () => {
    queryClient.setQueryData(['pokemon', { name: pokemon.name }], pokemon)
  }

  return (
    <button
      onClick={handlePokemon}
      onMouseEnter={handleMouseEnter}
      className="transform transition duration-500 hover:scale-105"
    >
      <Card
        className={`flex flex-col justify-center items-center py-4 md:h-56 ${className}`}
        imgColor={pokemon.image}
      >
        <LazyImage
          width={80}
          height={80}
          alt={pokemon.name}
          src={pokemon.image}
        />
        <Typography variant="h1" className="text-lg md:hidden">
          {pokemon.name}
        </Typography>
        <Typography variant="h2" className="text-md md:hidden">
          {pokemon.id}
        </Typography>
      </Card>
      {/* Description */}
      <div className="hidden md:block mt-1" data-testid="description-section">
        <div className="flex justify-between mx-2 items-center">
          <Typography>n{pokemon.id}</Typography>
          <span className="bg-green-500 rounded text-xs text-white px-2 py-1">
            w: {pokemon.weight}
          </span>
        </div>
        <div className="flex justify-between items-center mx-2 mt-1">
          <Typography variant="h2">{pokemon.name}</Typography>
          <span className="bg-blueLigth rounded text-white text-xs px-2 py-1">
            s: {pokemon?.stats[0]?.base_stat || 0}
          </span>
        </div>
      </div>
    </button>
  )
}
