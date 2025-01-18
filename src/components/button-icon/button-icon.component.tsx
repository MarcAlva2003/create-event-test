import React, { ButtonHTMLAttributes } from 'react'

export const ButtonIcon = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`p-3 rounded-lg flex items-center justify-center bg-[#2F2F31] disabled:opacity-50 text-white ${props.className}`}
    >
      {props.children}
    </button>
  )
}
