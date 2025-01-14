'use client'

import { AiFillCaretUp } from 'react-icons/ai'
import { Button } from '@/components/button/button.component'
import { ButtonIcon } from '@/components/button-icon/button-icon.component'
import Input from '@/components/input/input.component'
import { Select } from '@/components/select/select.component'

export default function Home() {
  const categorias = [
    { label: 'Electrónica', value: 'electronica' },
    { label: 'Ropa', value: 'ropa' },
    { label: 'Hogar', value: 'hogar' }
  ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Save</Button>
      <ButtonIcon>
        <AiFillCaretUp />
      </ButtonIcon>
      <ButtonIcon disabled>
        <AiFillCaretUp />
      </ButtonIcon>
      <Select options={categorias} placeholder="Placeholderdwda" />
      <Select options={categorias} value={'ropa'} />
      <Input
        errorMessage="Este es un error"
        label="This is a label"
        id="input-component-1"
        placeholder="This is the placeholder"
      />
      <Input hasError errorMessage="Este es un error" />
    </div>
  )
}
