import { FormEvent, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Contact, useContactContext } from '../contexts/ContactContext'
import Button from './Button'
import Input from './Input'
import Line from './Line'

const Form = () => {
  const [disabled, setDisabled] = useState(true)

  const {
    formData,
    setFormData,
    contactList,
    setContactList,
    createModalActive,
    handleUnmountModal,
    highlighList,
    setHighlighList
  } = useContactContext()

  const colors = [
    '#68a0fa',
    '#fab668',
    '#8368fa',
    '#fa68b5',
    '#5fe2c4',
    '#f55a5a'
  ]

  useEffect(() => {
    setDisabled(checkIfAnyFieldsHaveBeenFilled())
  }, [formData])

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setFormData({
        ...formData,
        [name]: value
      })
    },
    [formData]
  )

  const handleRegister = async () => {
    const id = uuid()
    const color = pickARandomColor()
    const newContact = {
      id: id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      color: color,
      highlighted: true
    }
    setContactList([...contactList, newContact])

    highlighList.length ? setHighlighList([...highlighList, id]) : setHighlighList([id])
    setFormData({} as Contact)
    setDisabled(true)
  }

  const handleUpdate = async () => {
    const updatedContact = formData
    const filteredList = contactList.filter(
      (contact) => contact.id !== updatedContact.id
    )
    setContactList([...filteredList, updatedContact])
    handleUnmountModal()
  }

  const checkIfAnyFieldsHaveBeenFilled = useCallback(() => {
    if (formData.name || formData.email || formData.phone) return false
    return true
  }, [formData])

  const pickARandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createModalActive ? handleRegister() : handleUpdate()
        }}
      >
        <div className="py-5 px-6 flex flex-col gap-4">
          <Input
            label="Nome"
            name="name"
            onChange={handleChange}
            value={formData.name || ''}
            maxLength={30}
          />
          <Input
            type="email"
            label="E-mail"
            name="email"
            onChange={handleChange}
            value={formData.email || ''}
            maxLength={30}
          />
          <Input
            mask="phoneMask"
            label="Telefone"
            name="phone"
            width="w-32"
            onChange={handleChange}
            value={formData.phone || ''}
            maxLength={15}
          />
        </div>
        <Line />
        <div className="flex justify-end p-4 gap-4">
          <Button
            text="Cancelar"
            bg="bg-transparent"
            textColor="text-lightRed"
            onClick={handleUnmountModal}
          />
          <Button
            type="submit"
            text="Salvar"
            bg="bg-lightRed"
            textColor="text-white"
            disabled={disabled}
          />
        </div>
      </form>
    </>
  )
}

export default Form
