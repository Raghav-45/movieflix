import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2.5 px-2.5 bg-gradient-to-b from-black/60 from-50% via-black/60 via-80%">
        {Array.from({length: 20}, (_, i) => i + 1).map(movie => (
          <div key={movie.i} className='relative flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-white/5'>
            <Skeleton className='h-full w-full bg-white/30'></Skeleton>
          </div>
        ))}
        <div className='pb-[270px]'></div>
      </div>
    </div>
  )
}