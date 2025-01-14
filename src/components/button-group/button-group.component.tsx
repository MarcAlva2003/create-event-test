import { useEffect, useState } from 'react'

import { Button } from '../button/button.component'

interface IButtonGroupOption {
  label: string
  value: string
}

interface IButtonGroup {
  options: IButtonGroupOption[]
  onChange?: (value: string) => void
  defaultValue?: string
  value: string
}

export const ButtonGroup = ({ options, onChange, defaultValue, value }: IButtonGroup) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue)

  const handleClick = (value: string) => {
    setSelectedValue(value)
    if (onChange) {
      onChange(value)
    }
  }

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  return (
    <div className="flex bg-[#4323FF1A] border border-solid border-[#4323FF66] rounded-lg">
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleClick(option.value)}
          isInactive={selectedValue !== option.value}
          isButtonGroup
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
