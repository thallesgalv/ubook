interface IconProps {
  color: string
  letter: string
}

const Icon = ({ color, letter }: IconProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center mr-6">
      <span
        style={{ backgroundColor: color }}
        className="rounded-full w-6 h-6 p-1 text-base text-white flex justify-center items-center"
      >
        {letter}
      </span>
    </div>
  )
}

export default Icon
