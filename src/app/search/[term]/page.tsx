import MoviesCarousel from "@/components/MoviesCarousel";
import MoviesCarouselSlider from "@/components/MoviesCarouselSilder";
import getAISuggestion from "@/lib/AISugguest";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

const page = async ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);

  //Api Call  To Get Searched Movies
  const searchedMoviesResults = await getSearchedMovies(termToUse);
  // console.log(searchedMoviesResults);

  //Api Call To Get Popular Movies
  const popularMovies = await getPopularMovies();

  // Ai OpenAi Suggesting
  // await getAISuggestion() // testing

  return (
    <section className="py-10 mt-20">
      <div className="container">
        <p className="text-2xl ">The Search Results For : {termToUse}</p>
        <MoviesCarousel isVertical movies={searchedMoviesResults} />
        {/* <MoviesCarousel title="You Also May Like" movies={popularMovies} /> */}


        <MoviesCarouselSlider
        movies={popularMovies}
        title="You Also May Like"
        />

      </div>
    </section>
  );
};

export default page;
