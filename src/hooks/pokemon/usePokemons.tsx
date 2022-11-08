import { useInfiniteQuery } from '@tanstack/react-query'

import { IInfiniteQuery } from '@/types'
import { PokemonService } from '@/services'
import { Pokemon } from '@/types/pokemon'
import { imgPokemon } from '@/helpers'

interface IProps {
  limit: number
}

export const getPokemonWithAbility = async (
  pokemon: string
): Promise<Pokemon> => {
  const { data } = await PokemonService.getPokemon(pokemon)
  const newPokemon: Pokemon = {
    id: data.id,
    base_experience: data.base_experience,
    forms: data.forms,
    name: data.name,
    order: data.order,
    species: data.species,
    sprites: data.sprites,
    stats: data.stats,
    types: data.types,
    weight: data.weight,
    image: imgPokemon(data.id),
    ability: '',
  }
  const ability = data.abilities
  if (ability && ability[0].ability.name !== '') {
    const id = ability[0].ability.url.match(/\d+/g)
    if (id) {
      const pokeAbility = await PokemonService.getAbilities(
        id.length > 0 ? Number(id[1]) : 1
      )
      pokeAbility.data.effect_entries.forEach((entry) => {
        if (entry.language.name === 'en') {
          newPokemon.ability = entry.effect
        }
      })
    }
  }
  return newPokemon
}

const getAllPokemons = async ({
  pageParam = 0,
  queryKey,
}: IInfiniteQuery<IProps>) => {
  const [, args] = queryKey

  const { limit } = args as IProps

  let pokemons: Pokemon[] = []
  const pokemonsPromise: Promise<Pokemon>[] = []

  const res = await PokemonService.getAllPokemons(pageParam * 10, limit)

  if (res?.data?.results.length === 0) return pokemons

  res.data.results.forEach((pokemon) => {
    pokemonsPromise.push(getPokemonWithAbility(pokemon.name))
  })

  pokemons = await Promise.all(pokemonsPromise)

  return pokemons
}

export const usePokemons = ({ limit = 10 }: IProps) => {
  const allPokemonsQuery = useInfiniteQuery({
    queryKey: ['pokemons', { limit }],
    queryFn: getAllPokemons,
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
