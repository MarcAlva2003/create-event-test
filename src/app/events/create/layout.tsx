'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/button/button.component'
import { ButtonIcon } from '@/components/button-icon/button-icon.component'
import { CREATE_EVENT_STEPS } from '@/constants/create-event-steps'
import { CreateEventSidebar } from '@/components/create-event-sidebar/create-event-sidebar.component'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const router = useRouter()
  const getCurrentStep = () => {
    return CREATE_EVENT_STEPS.find((step) => step.route === pathname)
  }

  const canGoForward = () => {
    const currentStep = getCurrentStep()
    if (!currentStep) return false
    return currentStep.step < CREATE_EVENT_STEPS.length - 1
  }

  const canGoBack = () => {
    const currentStep = getCurrentStep()
    if (!currentStep) return false
    return currentStep.step > 0
  }

  const handleNextRoute = () => {
    const currentStep = getCurrentStep()
    if (!currentStep) return null
    if (!canGoForward()) return null
    router.push(CREATE_EVENT_STEPS[currentStep.step + 1].route)
  }

  const handlePreviousRoute = () => {
    const currentStep = getCurrentStep()
    if (!currentStep) return null
    if (!canGoBack()) return null
    router.push(CREATE_EVENT_STEPS[currentStep.step - 1].route)
  }

  return (
    <div className="w-full flex">
      <div className="w-248px">
        <CreateEventSidebar />
      </div>
      <div className="w-full p-5">
        <div className="mb-6">{children}</div>
        <div className="flex justify-end mb-5">
          <ButtonIcon className="mr-5" onClick={handlePreviousRoute} disabled={!canGoBack()}>
            <FaChevronLeft />
          </ButtonIcon>
          <ButtonIcon onClick={handleNextRoute} disabled={!canGoForward()}>
            <FaChevronRight />
          </ButtonIcon>
        </div>
        <div className="mr-[0px] ml-[auto] w-fit">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  )
}
