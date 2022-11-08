import { useQuery } from '@tanstack/react-query'
import { getPokemonWithAbility } from '@/hooks/pokemon/usePokemons'

interface IProps {
  name: string
}

const getPokemon = async (name: string) => {
  const res = await getPokemonWithAbility(name)
  return res
}

export const usePokemon = ({ name }: IProps) => {
  const pokemon = useQuery({
    queryKey: ['pokemon', { name }],
    queryFn: () => getPokemon(name),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  return { pokemon }
}
