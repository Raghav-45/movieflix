import Navbar from '@/components/Navbar'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

type Movie = {
  id: number,
  title: string,
  original_title: string,
  overview: string,
  original_language: string,
  poster_path: string,
  backdrop_path: string,
  release_date: string,
}

const getMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_APIKEY}&language=en-US&query=${'spiderman'}&page=1&include_adult=false`)
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  await new Promise((resolve) => setTimeout(resolve, 10000))
  const data = await res.json()
  return data.results
}

export default async function Home() {
  const movies = await getMovies()
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2.5 px-2.5 bg-gradient-to-b from-black/60 from-50% via-black/60 via-80%">
        {movies.map(movie => (
          <div key={movie.id} className='relative flex-none w-full aspect-[27/41] rounded-xl overflow-hidden bg-blue-400'>
            <Image fill className='h-full w-full' src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.mykite.in/kb/NoImageFound.jpg.png'} alt={movie.title} />
            {/* <img className='h-full w-full' src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.mykite.in/kb/NoImageFound.jpg.png'} alt={movie.title} /> */}
          </div>
        ))}
        <div className='pb-[270px]'></div>
      </div>
    </div>
  )
}
