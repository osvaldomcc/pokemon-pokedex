import { Typography } from '@/components/commons'
import { ErrorLayout } from '@/layouts'

export const NotFound = () => {
  return (
    <ErrorLayout>
      <Typography variant="h1">We couldn't find the Pokemon</Typography>
      <Typography>Please try with another one</Typography>
    </ErrorLayout>
  )
}
