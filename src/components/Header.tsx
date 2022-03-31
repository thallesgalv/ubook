import { useContactContext } from '../contexts/ContactContext'
import Logo from '../Svgs/Logo'
import CreateButton from './CreateButton'
import SearchBar from './SearchBar'

const Header = () => {
  const { contactList } = useContactContext()
  return (
    <header className="lg:h-16 flex justify-between items-center p-4 focus:border-none gap-4 flex-wrap lg:flex-nowrap">
      <Logo />
      {contactList.length ? (
        <div className="lg:ml-[60px] lg:mr-6">
          <CreateButton />
        </div>
      ) : null}
      <div className=" w-full lg:flex-1">
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
