import { useState, useEffect } from "react";
import api from './services/api';
import Loader from "./loader";
import MovieCard from "./movieCard";
import ErrorMessage from "./errorMessage"
import './movieList.css'

function MovieList({ nombre, onMovieDetail }) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
        if (!nombre) return; 

    setLoading(true);
    setError(false);
    api.get('', { params: { s: nombre } })
      .then((response) => {
        if (response.data.Response === "False") { 
          setError(true);
        } else {
          setPeliculas(response.data.Search);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [nombre]);
  if (!nombre) return null;
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="movieGridd">
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {peliculas.map((p) => (
            <MovieCard
              key={p.imdbID}
              titulo={p.Title}
              año={p.Year}
              tipo={p.Type}
              poster={p.Poster}
              imdbID={p.imdbID}
              onMovieDetail={onMovieDetail}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default MovieList;
