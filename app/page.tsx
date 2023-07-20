import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='sticky top-0'>
        <div className='flex h-14 w-full bg-[#666]'>
          <div className='mr-auto order-first'></div>
          {/* <div className='flex-auto max-w-[700px] bg-white items-center rounded-xl my-2.5'> */}
            <Input className='flex-auto h-auto max-w-[700px] bg-black/40 text-white !placeholder-white/40 items-center rounded-lg m-2.5 border-hidden focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search & run commands' />
          {/* </div> */}
          <div className='ml-auto order-last'></div>
        </div>
      </div>

      {/* <div className='flex'>
        <img className='flex-none w-full aspect-[1/2]' src='https://www.w3schools.com/tags/img_girl.jpg'></img>
      </div> */}
      {/* <div className="grid grid-cols-2 gap-2.5 px-2.5 bg-gradient-to-b from-black/60 to-black/30"> */}
      <div className="grid grid-cols-2 gap-2.5 px-2.5 bg-gradient-to-b from-black/60 from-50% via-black/60 via-80%">
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
          {/* <img className='h-full w-full' src='https://www.w3schools.com/tags/img_girl.jpg'></img> */}
        </div>
        <div className='pb-[170px]'></div>
      </div>
    </div>
  )
}
