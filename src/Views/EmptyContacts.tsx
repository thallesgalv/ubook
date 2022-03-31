import CreateButton from '../components/CreateButton'
import SVGBook from '../Svgs/SVGBook'

const EmptyContacts = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-6 mt-28">
      <SVGBook />
      <p className="text-dark">Nenhum contato foi criado ainda.</p>
      <CreateButton />
    </section>
  )
}

export default EmptyContacts
