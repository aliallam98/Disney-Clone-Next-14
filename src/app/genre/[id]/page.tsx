import MoviesCarousel from "@/components/MoviesCarousel";
import MoviesCarouselSlider from "@/components/MoviesCarouselSilder";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscoverMovies(id);
  const discoverMovies = await getDiscoverMovies();

  // Ai OpenAi Suggesting
  return (
    <section className="py-10 mt-20">
      <div className="container">
        <p className="text-2xl">The Results For Genre : {genre}</p>
        <MoviesCarousel movies={movies} isVertical />
        {/* <MoviesCarousel title="You Also May Like" movies={discoverMovies} /> */}

        <MoviesCarouselSlider movies={discoverMovies} title="You Also May Like"
        />
      </div>
    </section>
  );
};

export default GenrePage;
