import { pokeApi } from '@/api/pokeApi'
import { Pokemon, PokemonEffects, PokemonList } from '@/types/pokemon'
import { AxiosResponse } from 'axios'

const basePath = '/pokemon'

const getAllPokemons = async (
  offset: number = 0,
  limit: number = 10
): Promise<AxiosResponse<PokemonList>> => {
  const params = new URLSearchParams()
  params.append('limit', String(limit))
  params.append('offset', String(offset))

  return pokeApi.get(basePath, { params })
}

const getPokemon = async (name: string): Promise<AxiosResponse<Pokemon>> => {
  return pokeApi.get(`${basePath}/${name}`)
}

const getAbilities = async (
  id: number
): Promise<AxiosResponse<PokemonEffects>> => {
  return pokeApi.get(`ability/${id}`)
}

const methods = { getAllPokemons, getPokemon, getAbilities }
export default methods
