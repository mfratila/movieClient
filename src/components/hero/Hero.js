import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieDetails from "../movieDetails/MovieDetails";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <MovieDetails
                    poster={movie.poster}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    genres={movie.genres}
                    trailerLink={movie.trailerLink}
                    imdbId={movie.imdbId}
                    handleReviews={reviews}
                  />
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
