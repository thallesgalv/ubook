import { ReactNode } from 'react'

interface TableRowProps {
  children: ReactNode
  extraClasses?: string
}

const TableRow = ({ children, extraClasses }: TableRowProps) => {
  return <tr className={`py-3 border-t border-line flex transition-colors ${extraClasses || null}`}>{children}</tr>
}

export default TableRow
