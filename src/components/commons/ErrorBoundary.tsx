import { AxiosError } from 'axios'

import { NotFound, InternalError } from '@/pages/Errors'

interface IProps {
  error: AxiosError
  children: React.ReactNode | React.ReactNode[]
}

export const ErrorBoundary = ({ error, children }: IProps) => {
  return (
    <>
      {error ? (
        error.response?.status === 404 ? (
          <NotFound />
        ) : (
          <InternalError />
        )
      ) : (
        children
      )}
    </>
  )
}
