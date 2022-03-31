import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  bg: string
  textColor: string
  icon?: ReactNode
  extraClasses?: string
}

const Button = ({ text, bg, textColor, icon, extraClasses, onClick, disabled, type}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
      className={`
        rounded-custom shadow-md
        text-sm font-medium
        py-2 px-4 flex justify-center items-center
        ${bg} ${textColor}
        ${extraClasses || null}
        ${disabled ? 'opacity-40 cursor-not-allowed' : null}
      `}
    >
      <span className="flex items-center justify-center gap-2">
        {icon}
        {text}
      </span>
    </button>
  )
}

export default Button



