import { ListItemPokemon } from '@/components/pokemon/ListItemPokemon'
import { Pokemon } from '@/types/pokemon'

interface IProps {
  pokemons?: Pokemon[]
}

export const ListPokemon = ({ pokemons = [] }: IProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 my-5 md:grid-cols-3 lg:grid-cols-5">
      {pokemons.map((pokemon) => (
        <ListItemPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
