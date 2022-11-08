import { Card, LazyImage } from '@/components/commons'
import { IPokemonDetailProps } from '@/components/pokemon/PokemonDetail/PokemonDetailMeta'

export const PokemonDetailCard = ({ pokemon }: IPokemonDetailProps) => {
  return (
    <Card
      className="flex justify-center items-center h-80 md:h-[30rem] md:mr-10"
      imgColor={pokemon?.image}
    >
      <LazyImage
        width={200}
        height={200}
        alt={pokemon?.name || ''}
        src={pokemon?.image || ''}
      />
    </Card>
  )
}
