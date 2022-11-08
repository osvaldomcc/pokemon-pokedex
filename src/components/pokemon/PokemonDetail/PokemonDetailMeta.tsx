import { Pokemon } from '@/types/pokemon'
import { Helmet } from 'react-helmet-async'

export interface IPokemonDetailProps {
  pokemon?: Pokemon
}

export const PokemonDetailMeta = ({ pokemon }: IPokemonDetailProps) => {
  return (
    <>
      <Helmet>
        <title>Pokemon Detail</title>
        <meta property="og:title" content={pokemon?.name} />
        <meta property="og:description" content="The best Pokedex ever" />
        <meta property="og:image" content={pokemon?.sprites.front_shiny} />
      </Helmet>
    </>
  )
}
