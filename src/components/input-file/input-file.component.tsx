import './input-file.styles.css'

import { Accept, useDropzone } from 'react-dropzone'
import React, { useEffect, useState } from 'react'

import { FaUpload } from 'react-icons/fa'
import Image from 'next/image'
import { MdDeleteForever } from 'react-icons/md'

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void
  singleFile?: boolean
  acceptedFiles: Accept
  selectedFiles: File[]
}

export const Dropzone: React.FC<DropzoneProps> = ({ onDrop, singleFile, acceptedFiles, selectedFiles }) => {
  const [files, setFiles] = useState<File[]>([])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFiles
  })

  useEffect(() => {
    setFiles(selectedFiles)
  }, [selectedFiles])

  const getImage = (file: File) => {
    return URL.createObjectURL(file)
  }

  const clearFiles = () => {
    onDrop([])
    setFiles([])
  }

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
        relative
        w-full
        h-48
        rounded-xl
        bg-[#333333]
        border-2
        border-dashed
        border-[#474747]
        cursor-pointer
        flex
        flex-col
        items-center
        justify-center
        ${isDragActive ? 'border-green-300 bg-[#333333] bg-opacity-70' : ''}
      `}
      >
        <input {...getInputProps()} />
        {!singleFile || files.length === 0 ? (
          <div className="flex flex-col items-center">
            <FaUpload className="text-green-300 h-10 w-10 mb-2" />
            <p className="text-white text-sm">Click or drop image</p>
          </div>
        ) : (
          <div className="image-container flex flex-col items-center rounded-xl">
            <Image
              src={getImage(files[0])}
              alt="Imagen cargada"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="image-container-remove absolute w-full h-full bg-[#00000080] rounded-xl top-0 left-0 flex items-center justify-center">
              <button
                onClick={(ev) => {
                  ev.preventDefault()
                  ev.stopPropagation()
                  clearFiles()
                }}
                className="text-red-700 bg-gray-900 p-2 rounded-[50%]"
              >
                <MdDeleteForever size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
      {!singleFile && files.length > 0 && (
        <div className="text-white flex mt-6">
          {files.map((item: File, index) => (
            <div
              className="image-container flex relative items-center rounded w-[100px] h-[100px] mr-4 overflow-hidden"
              key={`selected-file-${index}`}
            >
              <Image alt={`Imagen cargada ${index}`} src={getImage(item)} layout="fill" objectFit="cover" />
              <div className="image-container-remove absolute w-full h-full bg-[#00000080] rounded top-0 left-0 flex items-center justify-center">
                <button
                  onClick={(ev) => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    clearFiles()
                  }}
                  className="text-red-700 bg-gray-900 p-2 rounded-[50%]"
                >
                  <MdDeleteForever size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
