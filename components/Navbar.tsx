import { FC } from 'react'
import { Input } from './ui/input'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className='sticky top-0 z-10'>
      <div className='flex h-14 w-full bg-[#666]'>
        <div className='mr-auto order-first'></div>
          <Input className='flex-auto h-auto max-w-[700px] bg-black/40 text-white !placeholder-white/40 items-center rounded-lg m-2.5 border-hidden focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search & run commands' />
        <div className='ml-auto order-last'></div>
      </div>
    </div>
  )
}

export default Navbar