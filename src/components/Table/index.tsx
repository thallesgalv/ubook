import { Contact, useContactContext } from '../../contexts/ContactContext'
import SVGDelete from '../../Svgs/SVGDelete'
import SVGEdit from '../../Svgs/SVGEdit'
import Icon from './Icon'
import TableData from './TableData'
import TableHead from './TableHead'
import TableRow from './TableRow'

interface TableProps {
  data: Contact[]
}

const Table = ({ data }: TableProps) => {
  const { handleEdit, handleConfirmDeletion } = useContactContext()

  const sortAlphabetically = (a: Contact, b: Contact) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  }

  return (
    <div className="overflow-x-auto">
      <table
        className="bg-white w-full border rounded border-line border-separate"
      >
        <thead>
          <TableRow extraClasses="flex border-none">
            <TableHead extraClasses="w-10 xl:w-[47px]"> </TableHead>
            <TableHead extraClasses="w-40 xl:w-[335px]">Contatos</TableHead>
            <TableHead extraClasses="w-40 xl:w-[449px]">E-mail</TableHead>
            <TableHead extraClasses="w-40 xl:w-[312px]">Telefone</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {data
            .sort(sortAlphabetically)
            .map(({ id, name, email, phone, color, highlighted }) => (
              <TableRow
                key={id}
                extraClasses={`hover:bg-lightPink ${
                  highlighted ? 'bg-lightPink' : null
                }`}
              >
                <TableData extraClasses="w-10 xl:w-[47px]">
                  <Icon
                    letter={name?.charAt(0).toUpperCase() || '?'}
                    color={color || 'blue'}
                  />
                </TableData>
                <TableData extraClasses="w-40 xl:w-[335px]">{name}</TableData>
                <TableData extraClasses="w-40 xl:w-[449px]">{email}</TableData>
                <TableData extraClasses="w-40 xl:w-[312px]">{phone}</TableData>
                <TableData extraClasses="ml-4 md:ml-auto pr-4">
                  <div className="flex gap-6">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        if (id) handleEdit(id)
                      }}
                    >
                      <SVGEdit fill="#9198AF" />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        if (id) handleConfirmDeletion(id)
                      }}
                    >
                      <SVGDelete fill="#9198AF" />
                    </button>
                  </div>
                </TableData>
              </TableRow>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
