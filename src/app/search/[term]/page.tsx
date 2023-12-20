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
  //Api Call To Get Popular Movies
  const popularMovies = await getPopularMovies();

  return (
    <section>
      <p>Welcome To Search Page : {termToUse}</p>
    </section>
  );
};

export default page;
