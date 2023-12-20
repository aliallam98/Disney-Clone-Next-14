import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'
import MoviesCarousel from '@/components/MoviesCarouselWrapper'
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from '@/lib/getMovies'

export default async function Home() {
  const upComingMovies = await getUpComingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()    
  return (
    <main className='bg-white dark:bg-[#1A1C29]'>
      {/* Carousel Wrapper */}
      <CarouselBannerWrapper/>

      {/* Carousel UpComing */}
      <MoviesCarousel
      title='Up Coming'
      movies={upComingMovies}
      />
      {/* Carousel TopRated */}
      <MoviesCarousel
      title='Top Rated'
      movies={topRatedMovies}
      />
      {/* Carousel Popular */}
      <MoviesCarousel
      title='Popular'
      movies={popularMovies}
      />

    </main>
  )
}
