import { Typography } from '@/components/commons'
import { ErrorLayout } from '@/layouts'

export const InternalError = () => {
  return (
    <ErrorLayout>
      <Typography variant="h1">Oops! there was an error</Typography>
      <Typography>Please contact the admin</Typography>
    </ErrorLayout>
  )
}
