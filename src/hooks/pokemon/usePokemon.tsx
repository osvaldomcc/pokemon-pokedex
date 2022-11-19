import { getPokemonWithAbility } from '@/api'
import { useQuery } from '@tanstack/react-query'

interface IProps {
  name: string
}

export const usePokemon = ({ name }: IProps) => {
  const pokemon = useQuery({
    queryKey: ['pokemon', { name }],
    queryFn: () => getPokemonWithAbility(name),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  return { pokemon }
}
