import Image from "next/image";
import { Movie } from "../../typings";
import { getImagePath } from "@/lib/getImagePath";

interface IProps {
  movie: Movie;
}

const MovieCard = ({ movie }: IProps) => {
  // console.log(movie);

  return (
    <article className="flex-shrink-0  relative cursor-pointer hover:scale-105 transition duration-200 ease-out ">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
      <p className="absolute bottom-4 left-4 text-xs ">{movie.title}</p>
      
      <Image
        className="w-fit lg:min-w-[400px] !h-56 object-cover object-center rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
      />
    </article>
  );
};

export default MovieCard;
