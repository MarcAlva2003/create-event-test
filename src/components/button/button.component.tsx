import React from 'react'

interface IButton {
  children?: React.ReactNode
  isError?: boolean
}

export const Button = (props: IButton) => {
  const { children, isError } = props;

  

  return <button className="h-[48px] px-[42px] rounded-lg bg-[#4323FF] text-white font-bold text-sm">{children}</button>
}
