
import { IInfiniteQuery } from '@/types'
import { PokemonService } from '@/services'
import { Pokemon } from '@/types/pokemon'
import { imgPokemon } from '@/helpers'

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

export const getAllPokemons = async <T extends { limit: number }>({
  pageParam = 0,
  queryKey,
}: IInfiniteQuery<T>) => {
  const [, args] = queryKey

  const { limit } = args as T

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