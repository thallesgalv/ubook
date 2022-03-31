import { FormEvent } from 'react'

export const phoneMask = (event: FormEvent<HTMLInputElement>) => {
  // event.currentTarget.maxLength = 15;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  event.currentTarget.value = value
  return event
}
