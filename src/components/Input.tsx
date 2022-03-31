import { InputHTMLAttributes, useCallback } from 'react'
import { phoneMask } from '../utils/masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  width?: string
  mask?: string
}

const Input = ({ name, label, width, value, onChange, type, mask, placeholder, maxLength }: InputProps) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'phoneMask') {
        phoneMask(e)
      }
      console.log(e.currentTarget.value)
    },
    [mask]
  )

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        required
        maxLength={maxLength}
        autoComplete="off"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
        type={type || 'text'}
        className={`border border-line rounded text-sm p-2 focus:outline-none ${
          width || ' w-full'
        }`}
      />
    </div>
  )
}

export default Input
