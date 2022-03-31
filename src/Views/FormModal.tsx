import Form from '../components/Form'
import Modal from '../components/Modal'
import { useContactContext } from '../contexts/ContactContext'

const CreateContact = () => {
  const { createModalActive, editModalActive } = useContactContext()

  if (!createModalActive && !editModalActive) return null
  return (
    <Modal title={createModalActive ? 'Criar novo contato' : 'Editar Contato'}>
      <Form />
    </Modal>
  )
}

export default CreateContact
