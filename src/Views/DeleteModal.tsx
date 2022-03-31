import Button from '../components/Button'
import Line from '../components/Line'
import Modal from '../components/Modal'
import { useContactContext } from '../contexts/ContactContext'

const DeleteModal = () => {
  const { deleteModalActive, handleUnmountModal, handleDelete } =
    useContactContext()

  if (!deleteModalActive) return null
  return (
    <Modal title="Excluir Contato">
      <p className="pb-14 pl-6 pt-5">Deseja realmente excluir o contato?</p>
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
          text="Excluir"
          bg="bg-lightRed"
          textColor="text-white"
          onClick={handleDelete}
        />
      </div>
    </Modal>
  )
}

export default DeleteModal
