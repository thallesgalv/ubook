import { useEffect } from 'react'
import Table from '../components/Table'
import { Contact, useContactContext } from '../contexts/ContactContext'
import EmptyContacts from './EmptyContacts'

const ContactList = () => {
  const {
    contactList,
    setContactList,
    searchTerm,
    filteredContactList,
    setFilteredContactList,
    highlighList,
    setHighlighList
  } = useContactContext()

  useEffect(() => {
    const storage = localStorage.getItem('ubook')
    if (storage) {
      const parsed: Contact[] = JSON.parse(storage)
      const cleanHighlighted = parsed.map((contact) => {
        contact.highlighted = false
        return contact
      })

      setContactList(cleanHighlighted)
    }
  }, [])

  useEffect(() => {
    const highligh = setInterval(() => {
      const [firstItem] = highlighList
      if (firstItem) {
        const list = contactList.map((contact) => {
          if (contact.id === firstItem) {
            contact.highlighted = false
          }

          return contact
        })
        setContactList([...list])
      }

      const filter = highlighList.filter((id) => id !== firstItem)

      setHighlighList([...filter])
    }, 10000)

    return () => {
      clearInterval(highligh)
    }
  }, [contactList])

  useEffect(() => {
    localStorage.setItem('ubook', JSON.stringify(contactList))
  }, [contactList])

  useEffect(() => {
    const query = contactList.filter(
      (contact) =>
        contact.name.toLowerCase().trim().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().trim().includes(searchTerm.toLowerCase()) ||
        contact.phone.toLowerCase().trim().includes(searchTerm.toLowerCase())
    )
    setFilteredContactList(query)
  }, [searchTerm])

  if (contactList.length === 0) return <EmptyContacts />
  return (
    <>
      <section className="mt-4">
        {filteredContactList.length === 0 && searchTerm ? (
          <p className="text-center"> Nenhum contato corresponde a busca.</p>
        ) : (
          <Table
            data={
              filteredContactList.length && searchTerm
                ? filteredContactList
                : contactList
            }
          />
        )}
      </section>
    </>
  )
}

export default ContactList
