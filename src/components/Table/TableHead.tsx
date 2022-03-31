import { ReactNode } from 'react'

interface TableHeadProps {
  children: ReactNode
  extraClasses?: string
}

const TableHead = ({ children, extraClasses }: TableHeadProps) => {
  return (
    <th className={`text-blueGrey text-sm font-normal text-left ${extraClasses || null}`}>{children}</th>
  )
}

export default TableHead
