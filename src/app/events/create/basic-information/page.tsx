'use client'

import { ButtonGroup } from '@/components/button-group/button-group.component'
import { Checkbox } from '@/components/checkbox/checkbox.component'
import { Dropzone } from '@/components/input-file/input-file.component'
import { Input } from '@/components/input/input.component'
import { Select } from '@/components/select/select.component'
import clsx from 'clsx'
import { useState } from 'react'

export default function Home() {
  const formContainer = clsx('rounded-[12px] border border-solid border-[#2F2F31] p-5')

  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  const handleAddSingleFile = (files: File[]) => {
    setSelectedFile(files[0])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-5">Basic information</h2>
      <div className={formContainer}>
        <div className="m-[0_auto] w-fit mb-5">
          <ButtonGroup
            options={[
              {
                label: 'Enable Event',
                value: 'enable'
              },
              {
                label: 'Disable Event',
                value: 'disable'
              }
            ]}
            value="enable"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Select
            id="event-type-select"
            label="Event type"
            options={[
              {
                label: 'Public Event',
                value: 'public'
              },
              {
                label: 'Private Event',
                value: 'private'
              }
            ]}
          />
          <Input id="event-name-input" label="Event name" placeholder="Type here" />
        </div>
        <div className="mb-5">
          <Dropzone
            acceptedFiles={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
            onDrop={handleAddSingleFile}
            selectedFiles={selectedFile ? [selectedFile] : []}
            singleFile
            label="Banner"
          />
        </div>
        <div>
          <Checkbox id="overlay-title-on-banner-checkbox" label="Overlay Title on Banner" />
        </div>
      </div>
    </div>
  )
}
