import { createContext, ReactNode, useContext, useState } from 'react'

export interface Contact {
  id?: string
  name: string
  email: string
  phone: string
  color?: string
  highlighted?: boolean
}

interface ContactContextProviderProps {
  children: ReactNode
}

interface ContactContextProps {
  formData: Contact
  setFormData: (data: Contact) => void
  contactList: Contact[]
  setContactList: (contactList: Contact[]) => void
  filteredContactList: Contact[]
  setFilteredContactList: (contactList: Contact[]) => void
  createModalActive: boolean
  setCreateModalActive: (createModalActive: boolean) => void
  editModalActive: boolean
  setEditModalActive: (editModalActive: boolean) => void
  deleteModalActive: boolean
  setDeleteModalActive: (deleteModalActive: boolean) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  pickedContact: string
  setPickedContact: (pickedContact: string) => void
  highlighList: string[]
  setHighlighList: (highlighList: string[]) => void
  handleEdit: (id: string) => void
  handleConfirmDeletion: (id: string) => void
  handleDelete: () => void
  handleUnmountModal: () => void
}

export const ContactContext = createContext({} as ContactContextProps)

export const ContactContextProvider = ({
  children
}: ContactContextProviderProps) => {
  const [formData, setFormData] = useState({} as Contact)
  const [contactList, setContactList] = useState<Contact[]>([])
  const [filteredContactList, setFilteredContactList] = useState<Contact[]>([])
  const [createModalActive, setCreateModalActive] = useState(false)
  const [editModalActive, setEditModalActive] = useState(false)
  const [deleteModalActive, setDeleteModalActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [pickedContact, setPickedContact] = useState('')
  const [highlighList, setHighlighList] = useState<string[]>([])

  const handleEdit = (id: string) => {
    setEditModalActive(true)
    const query = contactList.find((contact) => contact.id === id)
    if (query) {
      setFormData({
        id: query.id,
        name: query.name,
        email: query.email,
        phone: query.phone,
        color: query.color
      })
    }
  }

  const handleConfirmDeletion = (id: string) => {
    setDeleteModalActive(true)
    setPickedContact(id)
  }

  const handleDelete = () => {
    if (pickedContact) {
      const listWithoutContact = contactList.filter(
        (contact) => contact.id !== pickedContact
      )
      setContactList(listWithoutContact)
      setDeleteModalActive(false)
    }
  }

  const handleUnmountModal = () => {
    setCreateModalActive(false)
    setEditModalActive(false)
    setDeleteModalActive(false)
    setPickedContact('')
    setFormData({} as Contact)
    setSearchTerm('')
  }

  return (
    <ContactContext.Provider
      value={{
        formData,
        setFormData,
        contactList,
        setContactList,
        filteredContactList,
        setFilteredContactList,
        createModalActive,
        setCreateModalActive,
        editModalActive,
        setEditModalActive,
        deleteModalActive,
        setDeleteModalActive,
        searchTerm,
        setSearchTerm,
        pickedContact,
        setPickedContact,
        highlighList,
        setHighlighList,
        handleEdit,
        handleConfirmDeletion,
        handleDelete,
        handleUnmountModal
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)
