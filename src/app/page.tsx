import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import MoviesCarouselSilder from "@/components/MoviesCarouselSilder";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upComingMovies = await getUpComingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="bg-[#1A1C29] pb-40">
      {/* Carousel Wrapper */}
      <CarouselBannerWrapper />

      {/* Carousel UpComing */}
      {/* <MoviesCarousel title="Up Coming" movies={upComingMovies} /> */}
      <MoviesCarouselSilder
      title="Up Coming"
      movies={upComingMovies}
      />
      {/* Carousel TopRated */}
      {/* <MoviesCarousel title="Top Rated" movies={topRatedMovies} /> */}
      <MoviesCarouselSilder
      title="Top Rated"
      movies={topRatedMovies}
      />
      
      {/* Carousel Popular */}
      {/* <MoviesCarousel title="Popular" movies={popularMovies} /> */}
      <MoviesCarouselSilder
      title="Popular"
      movies={popularMovies}
      />
    </main>
  );
}
