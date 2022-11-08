import { ThunderIcon } from '@/components/icons'

export const Loader = () => {
  return (
    <div className="absolute backdrop-blur-md inset-0 z-20">
      <div className="flex h-screen justify-center items-center dark:text-gray-300 text-blueDark">
        <ThunderIcon className="w-9 h-9 animate-bounce" />
      </div>
    </div>
  )
}
