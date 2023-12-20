import Link from "next/link";
import { Genres } from "../../typings";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  next: {
    revalidate: 60 * 60 * 24,
  },
};

const GenreDropDownMenu = async () => {
  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Genre</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <Link  key={genre.id}
          href={`/genre/${genre.id}?genre=${genre.name}`}
          >
          <DropdownMenuItem>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDownMenu;
