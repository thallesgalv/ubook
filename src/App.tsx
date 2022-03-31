import Header from './components/Header'
import Main from './components/Main'
import { ContactContextProvider } from './contexts/ContactContext'
import ContactList from './Views/ContactList'
import DeleteModal from './Views/DeleteModal'
import FormModal from './Views/FormModal'

const App = () => {
  return (
    <ContactContextProvider>
      <div className="bg-background font-primary">
        <Header />
        <Main>
          <ContactList />
        </Main>
        <FormModal />
        <DeleteModal />
      </div>
    </ContactContextProvider>
  )
}

export default App
