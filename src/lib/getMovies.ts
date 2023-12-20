import { SearchResults } from "../../typings"


const fetchMoviesFromTMDB = async (url:URL , cacheTime? : number)=>{
    url.searchParams.set("include_adult","false")
    url.searchParams.set("include_video","false")
    url.searchParams.set("sort_by","popularity.desc")
    url.searchParams.set("language","en-US")
    url.searchParams.set("page","1")

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24,
          },

}

const response = await fetch(url,options)
const data = response.json()

return data
}


export const getUpComingMovies = async()=>{
    const url = new URL ('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1')
    const data = await fetchMoviesFromTMDB(url);
    return data.results;
}
export const getTopRatedMovies =async ()=>{
    const url = new URL ('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
    const data = await fetchMoviesFromTMDB(url);
    return data.results;
}
export const getPopularMovies = async()=>{
    const url = new URL ("https://api.themoviedb.org/3/movie/popular")
    const data = await fetchMoviesFromTMDB(url);
    return data.results;
}

export const getDiscoverMovies =async (id?:string, keywords?:string)=>{
    const url = new URL ('https://api.themoviedb.org/3/discover/movie')

    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id)

    const data = await fetchMoviesFromTMDB(url) as SearchResults

    return data.results;


}
export const getSearchedMovies =async (term:string)=>{
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    url.searchParams.set("query", term);

    const data = await fetchMoviesFromTMDB(url)  as SearchResults

    return data.results 


}