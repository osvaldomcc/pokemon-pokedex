export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonList {
  count: number
  next?: string
  previous?: string
  results: PokemonListItem[]
}

export interface Pokemon {
  base_experience: number
  forms: Ability[]
  id: number
  name: string
  order: number
  species: Ability
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
  image: string
  abilities?: AbilityElement[]
  ability: string
}

interface Type {
  slot: number
  type: Ability
}

interface Stat {
  base_stat: number
  effort: number
  stat: Ability
}

export interface AbilityElement {
  ability: Ability
  is_hidden: boolean
  slot: number
}

interface Ability {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface PokemonEffects {
  effect_entries: EffectEntry[]
}

export interface EffectEntry {
  effect: string
  language: Language
}

export interface Language {
  name: string
  url: string
}
