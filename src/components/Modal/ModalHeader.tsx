import Line from '../Line'

interface ModalHeaderProps {
  text: string
}

const ModalHeader = ({ text }: ModalHeaderProps) => {
  return (
    <>
      <h1 className="p-4 pb-3">{text}</h1>
      <Line />
    </>
  )
}

export default ModalHeader
