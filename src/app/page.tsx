'use client'

import { AiFillCaretUp } from 'react-icons/ai'
import { Button } from '@/components/button/button.component'
import { ButtonGroup } from '@/components/button-group/button-group.component'
import { ButtonIcon } from '@/components/button-icon/button-icon.component'
import { Checkbox } from '@/components/checkbox/checkbox.component'
import Input from '@/components/input/input.component'
import { Select } from '@/components/select/select.component'
import { useState } from 'react'

export default function Home() {
  const categorias = [
    { label: 'Electrónica', value: 'electronica' },
    { label: 'Ropa', value: 'ropa' },
    { label: 'Hogar', value: 'hogar' }
  ]

  const buttonGroupOptions = [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' }
  ]
  const [selectedValue, setSelectedValue] = useState<string>(buttonGroupOptions[0].value)

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
      <ButtonGroup value={selectedValue} options={buttonGroupOptions} onChange={setSelectedValue} />
      <Checkbox label="This is a checkbox" />
    </div>
  )
}
