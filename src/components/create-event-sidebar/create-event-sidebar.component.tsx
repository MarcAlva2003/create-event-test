'use client'

import { CREATE_EVENT_STEPS, IEventStep } from "@/constants/create-event-steps"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export const CreateEventSidebar = () => {
  const stepButtonClsx = clsx('flex items-center w-[208px] px-2 py-3 border border-solid')
  const pathname = usePathname()
  const activeButtonClsx = clsx('text-[#F9F9F9] bg-[#1D1D1F] rounded-[8px] border-[#2F2F31]')
  const inactiveButtonClsx = clsx('text-[#FFFFFFB2] border-[transparent]')


  const getIsPathname = (route: string) => route === pathname
  
  return (
    <div className="bg-[#141416] h-full p-5 h-screen sticky top-0">
      <div className="mb-5">
        <h2 className="text-white font-bold text-2xl">Create Event</h2>
      </div>
      <div className="">
        {CREATE_EVENT_STEPS.map((item: IEventStep, index: number) => {
          return (
            <Link href={item.route} key={`create-event-step-${index}`} className="">
              <div className={`${stepButtonClsx} ${getIsPathname(item.route) ? activeButtonClsx : inactiveButtonClsx}`}>
                <div className={`mr-3 rounded-[50%] w-[24px] h-[24px] flex items-center justify-center ${getIsPathname(item.route) ? 'bg-[#4323FF] text-[#F9F9F9]' : 'bg-[#2F2F31] text-[#FFFFFFB2]'}`}>{item.step}</div>
                <div>{item.title}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}