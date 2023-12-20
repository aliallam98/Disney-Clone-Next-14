import { cn } from "@/lib/utils";
import { Movie } from "../../typings";
import MovieCard from "./MovieCard";

interface IProps {
  title: string;
  isVertical?: boolean;
  movies: Movie[];
}

const MoviesCarouselWrapper = ({ title, movies, isVertical }: IProps) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <div
        className={cn(
          "flex space-x-4 overflow-x-scroll scrollbar-hide lg:px-10 py-5",
          isVertical && "flex flex-col space-x-0  space-y-12"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className='flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MoviesCarouselWrapper;
