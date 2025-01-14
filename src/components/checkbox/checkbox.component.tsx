import React, { useState } from 'react'

import { IoMdCheckmark } from 'react-icons/io'
import clsx from 'clsx'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  defaultChecked?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, defaultChecked, ...rest }) => {
  const [isChecked, setIschecked] = useState<boolean>(defaultChecked ?? false)

  const handleCheck = (val: boolean) => {
    setIschecked(val)
  }

  const checkboxContainer = clsx(
    'relative h-6 w-6 border-gray-200 rounded-md',
    isChecked ? 'bg-green-300 border-green-300' : ''
  )

  return (
    <div className="flex items-center">
      <div className={checkboxContainer}>
        {isChecked && <IoMdCheckmark size={18} className="absolute text-black top-[3px] left-[3px]" />}

        <input
          type="checkbox"
          {...rest}
          onChange={(ev) => {
            handleCheck(ev.target.checked)
          }}
          className={`
          appearance-none
          absolute
          w-full
          h-full
          border
          rounded-md
          cursor-pointer
        `}
        />
      </div>
      {label && (
        <label htmlFor={rest.id} className="ml-3 text-white hover:cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
}
