import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = ({ poster, title, releaseDate, genres, trailerLink, imdbId, handleReviews}) => {
  return (
    <div className="movie-detail">
      <div className="movie-poster">
        <img src={poster} alt="" />
      </div>
      <div
        className="movie-info d-flex justify-content-around"
        style={{ flexDirection: "column" }}
      >
        <div className="movie-title">
          <h4>{title}</h4>
        </div>
        <div className="movie-info">
          <p>
            <strong>Release Date:</strong> {releaseDate}
          </p>
          <p>
            <strong>Genres:</strong> {genres.join(", ")}
          </p>
        </div>
        <div className="movie-buttons-container">
          <Link
            to={`/Trailer/${trailerLink.substring(
              trailerLink.length - 11
            )}`}
          >
            <div className="play-button-icon-container">
              <FontAwesomeIcon
                className="play-button-icon"
                icon={faCirclePlay}
              />
            </div>
          </Link>
          <div className="movie-review-button-container">
            <Button variant="info" onClick={() => handleReviews(imdbId)}>
              Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
