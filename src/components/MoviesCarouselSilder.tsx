"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movie } from "../../typings";
import MovieCard from "./MovieCard";


interface IProps {
  title?: string;
  movies: Movie[];
}
export default function MoviesCarouselSlider({ movies,title }: IProps) {
  return (
    <>
    <div className="container mt-8">
      <h3 className="text-2xl mb-4">{title}</h3>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <div className="container">
          {movies.map((movie, i) => (
            <SwiperSlide key={i}>
              <MovieCard
              movie={movie}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
    </>
  );
}
