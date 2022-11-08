import {
  Container,
  ErrorBoundary,
  Header,
  InfiniteScroll,
  Loader,
} from '@/components/commons'
import { ListPokemon } from '@/components/pokemon'
import { usePokemons } from '@/hooks/pokemon/usePokemons'
import { AxiosError } from 'axios'
import { useCallback } from 'react'

export const Pokedex = () => {
  const { allPokemonsQuery } = usePokemons({ limit: 10 })

  const handleLoadMore = useCallback(() => {
    allPokemonsQuery.fetchNextPage()
  }, [allPokemonsQuery])

  return (
    <ErrorBoundary error={allPokemonsQuery.error as AxiosError}>
      <InfiniteScroll
        onReachEnd={handleLoadMore}
        isLoading={allPokemonsQuery.isFetching}
      >
        {allPokemonsQuery.isLoading && <Loader />}
        <Header />
        <Container>
          <ListPokemon pokemons={allPokemonsQuery.data?.pages?.flat()} />
        </Container>
      </InfiniteScroll>
    </ErrorBoundary>
  )
}
