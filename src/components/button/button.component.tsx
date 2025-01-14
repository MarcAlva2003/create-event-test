import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  isError?: boolean
  isButtonGroup?: boolean
  isInactive?: boolean
}

export const Button: React.FC<IButton> = (props: IButton) => {
  const { children, isButtonGroup, isInactive, isError, ...rest } = props

  const buttonClsx = clsx('h-[48px] px-[42px] rounded-lg bg-[#4323FF] text-white font-bold text-sm',
    (isButtonGroup && isInactive) ? 'bg-[transparent] text-[#4323FF]' : '',
    {
      '': isButtonGroup && isInactive 
    }
  )

  return <button {...rest} className={buttonClsx}>{children}</button>
}
