import { ArrowIconTop } from '@/components/icons/ArrowIconTop'
import { useScroll } from '@/hooks'

export const ScrollToTop = () => {
  const { scrollTop, toggleVisible, applyAnimation } = useScroll()
  return (
    <>
      {toggleVisible && (
        <button
          className={`fixed bottom-5 right-5 ${
            applyAnimation ? 'animate-growIn' : 'animate-growOut'
          }`}
          onClick={scrollTop}
        >
          <div className="flex justify-center items-center z-100 w-8 h-8 p-2 rounded-full text-gray-300 bg-blueLigth dark:bg-blueDark">
            <ArrowIconTop className="w-4 h-4" />
          </div>
        </button>
      )}
    </>
  )
}
