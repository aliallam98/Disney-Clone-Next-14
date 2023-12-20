import MoviesCarouselWrapper from '@/components/MoviesCarouselWrapper'
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from '@/lib/getMovies'

export default async function Home() {
  const upComingMovies = await getUpComingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()    
  return (
    <main>
      {/* Carousel Wrapper */}

      {/* Carousel UpComing */}
      <MoviesCarouselWrapper
      title='Up Coming'
      movies={upComingMovies}
      />
      {/* Carousel TopRated */}
      <MoviesCarouselWrapper
      title='Top Rated'
      movies={topRatedMovies}
      />
      {/* Carousel Popular */}
      <MoviesCarouselWrapper
      title='Popular'
      movies={popularMovies}
      />

    </main>
  )
}
