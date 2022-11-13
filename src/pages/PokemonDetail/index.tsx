import { useNavigate, useParams } from 'react-router-dom'

import {
  Container,
  ErrorBoundary,
  Loader,
  Typography,
} from '@/components/commons'
import { SearchInput } from '@/components/commons/SearchInput'
import { usePokemon } from '@/hooks/pokemon/usePokemon'
import {
  PokemonDetailCard,
  PokemonDetailHeader,
  PokemonDetailMeta,
  PokemonDetailSprites,
} from '@/components/pokemon/PokemonDetail'
import { AxiosError } from 'axios'

export const PokemonDetail = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  const { pokemon: pokemonData } = usePokemon({ name: name || 'pikachu' })
  const { data: pokemon } = pokemonData

  //Methods
  const handleBack = () => navigate('/', { preventScrollReset: true })

  return (
    <ErrorBoundary error={pokemonData.error as AxiosError}>
      <span className="hidden" data-testid="poke-params">
        {name}
      </span>
      {pokemonData.isLoading && <Loader />}
      <PokemonDetailMeta pokemon={pokemon} />
      <div className="hidden md:block">
        <Container className="border-none">
          <SearchInput className="max-w-xs" labelClassName="md:text-left" />
        </Container>
      </div>
      <Container>
        <div className={'flex flex-col md:mt-0 md:flex-row pt-10'}>
          <div className="md:w-1/2">
            {/* Top */}
            <PokemonDetailHeader pokemon={pokemon} onBackPress={handleBack} />
            {/* Image */}
            <PokemonDetailCard pokemon={pokemon} />
          </div>
          <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:mx-5">
            {/* Tabs */}
            <div className="flex gap-5 mt-5">
              <span className="text-blueDark font-bold md:text-lg dark:text-gray-300">
                Forms
              </span>
            </div>
            {/* Sprites */}
            <PokemonDetailSprites pokemon={pokemon} />
            {/* Description */}
            <div className="my-5">
              <Typography variant="h1" className="text-xl">
                {pokemon?.name}
              </Typography>
              <Typography variant="h2" className="text-md text-left mt-1">
                {pokemon?.ability}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <div className="clearfix md:py-5"></div>
    </ErrorBoundary>
  )
}
