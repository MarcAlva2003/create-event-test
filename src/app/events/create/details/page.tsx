import { Input } from '@/components/input/input.component'
import clsx from 'clsx'

export default function Home() {
  const formContainer = clsx('rounded-[12px] border border-solid border-[#2F2F31] p-5')

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-5">Details</h2>
      <div className={formContainer}>
        <div className='mb-5 w-full'>
          <Input id='event-link-input' placeholder="https://crewfare.com/events/event-name/" label="Link" />
        </div>
        <div className='mb-5 grid grid-cols-2 gap-x-5'>
          <Input id='event-adress-input' placeholder="Type here" label="Event Address" />
          <Input id='venue-name-input' placeholder="Type here" label="Venue Name" />
        </div>
        <div className='grid grid-cols-2 gap-x-5'>
          <Input id='features-hotels-title-input' placeholder="Type here" label="Featured Hotels Title" />
          <Input id='minium-nights-input' placeholder="0" label="Minimum Nights" />
        </div>
      </div>
    </div>
  )
}
