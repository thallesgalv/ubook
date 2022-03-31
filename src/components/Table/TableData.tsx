import { ReactNode } from 'react'

interface TableDataProps {
  children: ReactNode
  extraClasses?: string
}

const TableData = ({ children, extraClasses }: TableDataProps) => {
  return <td className={`truncate text-sm ${extraClasses || null}`}>{children}</td>
}

export default TableData
