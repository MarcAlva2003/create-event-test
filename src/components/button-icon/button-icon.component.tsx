import React from 'react'

interface IButtonIcon {
  children?: React.ReactNode
  disabled?: boolean
}

export const ButtonIcon = (props: IButtonIcon) => {
  const { children, disabled } = props
  return <button disabled={disabled} className="p-3 rounded-lg flex items-center justify-center bg-[#2F2F31] disabled:opacity-50 text-white">{children}</button>
}