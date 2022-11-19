import { getAllPokemons } from '@/api'
import { useInfiniteQuery } from '@tanstack/react-query'

interface IProps {
  limit: number
}

export const usePokemons = ({ limit = 10 }: IProps) => {
  const allPokemonsQuery = useInfiniteQuery({
    queryKey: ['pokemons', { limit }],
    queryFn: getAllPokemons<IProps>,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return
      return Math.max(pages.length - 1, 0) + 1
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  return {
    allPokemonsQuery,
  }
}
