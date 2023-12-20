import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

const CarouselBannerWrapper = async () => {
  const movies = await getDiscoverMovies();
  return <CarouselBanner movies={movies} />;
};

export default CarouselBannerWrapper;
