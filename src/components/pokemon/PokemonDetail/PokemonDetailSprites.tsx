import { Card, LazyImage } from '@/components/commons'
import { IPokemonDetailProps } from '@/components/pokemon/PokemonDetail/PokemonDetailMeta'
import { Sprites } from '@/types/pokemon'

const imgs: Sprites = {
  front_default: '',
  front_shiny: '',
  back_default: '',
  back_shiny: '',
}

export const PokemonDetailSprites = ({ pokemon }: IPokemonDetailProps) => {
  return (
    <div className="flex gap-2 mt-2">
      {Object.keys(imgs).map((img, index) => {
        const imagePokemon = pokemon?.sprites.hasOwnProperty(img)
          ? pokemon?.sprites[img as keyof Sprites]
          : ''
        return (
          <Card
            key={`${img}-${index}`}
            className="flex justify-center items-center w-60 h-[6rem] md:h-[8rem]"
            imgColor={imagePokemon}
          >
            <LazyImage
              width={80}
              height={80}
              alt={pokemon?.name || ''}
              src={imagePokemon}
            />
          </Card>
        )
      })}
    </div>
  )
}
