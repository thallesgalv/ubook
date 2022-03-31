import { useContactContext } from '../contexts/ContactContext'
import SVGSearch from '../Svgs/SVGSearch'

const SearchBar = () => {
  const { setSearchTerm } = useContactContext()
  return (
    <div className="relative">
      <input
        className="bg-paleGrey p-2 w-full rounded placeholder:text-blueGrey focus:outline-none"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute top-3 right-2">
      <SVGSearch />
      </div>
    </div>
  )
}

export default SearchBar
