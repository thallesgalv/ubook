import { useContactContext } from '../contexts/ContactContext'
import SVGPlus from '../Svgs/SVGPlus'
import Button from './Button'

const CreateButton = () => {
  const { setCreateModalActive } = useContactContext()
  return (
    <Button
      text="Criar contato"
      bg="bg-lightYellow"
      textColor="text-lightRed"
      extraClasses="py-3 pl-4 pr-[22px]"
      icon={<SVGPlus fill="#FA7268" />}
      onClick={() => setCreateModalActive(true)}
    />
  )
}

export default CreateButton
