import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-14 w-full bg-black/60'>
      <div className='mr-auto'></div>
      {/* <div className='flex-auto max-w-[700px] bg-white items-center rounded-xl my-2.5'> */}
        <Input className='flex-auto h-auto max-w-[700px] bg-black/40 text-white !placeholder-white/40 items-center rounded-lg my-2.5 border-hidden focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search & run commands' />
      {/* </div> */}
      <div className='ml-auto'></div>
    </div>
  )
}
