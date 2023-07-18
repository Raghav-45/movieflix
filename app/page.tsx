import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-14 w-full bg-red-500'>
      <div className='mr-auto'></div>
      <div className='flex-auto max-w-[700px] bg-white items-center rounded-xl my-2'></div>
      <div className='ml-auto'></div>
    </div>
  )
}
