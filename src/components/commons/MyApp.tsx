import { SwitchTheme } from '@/components/commons/SwitchTheme'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

export const MyApp = ({ children }: IProps) => {
  return (
    <>
      <div className="min-h-screen dark:bg-slate-900">
        <div className="md:hidden sticky top-5 z-20">
          <div className="flex justify-end mr-5">
            <div className="flex items-center justify-center rounded-md bg-white w-10 h-10 dark:text-white dark:bg-slate-900">
              <SwitchTheme />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
