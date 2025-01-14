import React, { SelectHTMLAttributes } from 'react'

import { IoChevronDownSharp } from 'react-icons/io5'

interface ISelectOption {
  label: string
  value: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string
  hasError?: boolean
  label?: string
  options: ISelectOption[]
  placeholder?: string
}

export const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
  const { errorMessage, hasError, label, options, placeholder, ...rest } = props


  return (
    <div className="mb-4 relative">
      {label && (
        <label htmlFor={rest.id} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
      )}
      <select
        {...rest}
        value={rest.value ?? 'placeholder'}
        onChange={() => {}}
        className={`
          w-full
          px-4
          py-2
          border
          pr-10
          bg-[#2F2F31]
          rounded-md
          focus:outline-none
          text-white
          focus:ring-1
          focus:ring-[#FFFFFF33]
          min-w-[200px]
          ${hasError ? 'border-red-500 focus:ring-red-500 bg-[#E74C3C1A]' : 'border-[transparent]'}
        `}
      >
        <option value="placeholder" disabled hidden>{placeholder ?? 'Selecciona una opción'}</option> 
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#2F2F31] hover:cursor-pointer">
            {option.label}
          </option>
        ))}
      </select>
      {hasError && <div className="text-red-500 text-sm mt-1">{errorMessage}</div>}
      <div className="absolute text-white top-[14px] right-4">
        <IoChevronDownSharp />
      </div>
    </div>
  )
}
