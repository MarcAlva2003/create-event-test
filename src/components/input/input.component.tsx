import React, { InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  hasError?: boolean
  label?: string
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const { errorMessage, hasError, label, ...rest } = props

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={rest.id} className="block font-bold mb-2 hover:cursor-pointer text-white font-medium text-sm">
          {label}
        </label>
      )}{' '}
      {/* Etiqueta condicional */}
      <input
        {...rest}
        className={`
          w-full
          px-4
          py-2
          border
          bg-[#2F2F31]
          rounded-md
          text-white
          text-sm
          focus:outline-none
          focus:ring-1
          focus:ring-[#FFFFFF33]
          ${hasError ? 'border-red-500 focus:ring-red-500 bg-[#E74C3C1A]' : 'border-[transparent]'}
        `}
      />
      {hasError && errorMessage && <div className="text-red-500 text-sm mt-1">{errorMessage}</div>}
    </div>
  )
}

export default Input
