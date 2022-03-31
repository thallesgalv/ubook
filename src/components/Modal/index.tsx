import { ReactNode, useRef } from 'react'
import { useContactContext } from '../../contexts/ContactContext'
import ModalHeader from './ModalHeader'

interface ModalProps {
  children: ReactNode
  title: string
}

const Modal = ({ children, title }: ModalProps) => {
  const { handleUnmountModal } = useContactContext()
  const closeArea = useRef<HTMLElement>(null)

  const handleCloseModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === closeArea.current) {
      handleUnmountModal()
    }
  }

  return (
    <section
      className="h-screen w-full bg-modal fixed top-0 grid place-content-center"
      ref={closeArea}
      onClick={handleCloseModal}
    >
      <div className="bg-white rounded-2xl shadow-lg mx-auto text-dark min-w-[330px] md:min-w-[432px] animate-show">
        <ModalHeader text={title} />
        {children}
      </div>
    </section>
  )
}

export default Modal
