import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import WithSpinner from "./Pages/WithSpinner";
import SyncLoader from "react-spinners/SyncLoader";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      setIsLoading(false);
      return res;
    };
    fetchData();
  }, [fetchUrl]);

  return isLoading ? (
    <div>
      <SyncLoader color="#e50914" size={10} />
    </div>
  ) : (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default WithSpinner(Row);
