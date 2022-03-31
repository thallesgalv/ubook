import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return <main className="min-h-[calc(100vh_-_5rem)] px-4">{children}</main>
}

export default Main
