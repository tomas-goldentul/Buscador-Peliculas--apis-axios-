import { useState, useEffect } from "react";
import api from '../services/api';
import SearchBar from "./searchBar";
import Loader from "./loader";

function MovieList({ nombre }) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`?t=${nombre}`)
      .then((response) => {
        setPeliculas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR");
        setLoading(false);
      });
  }, [nombre]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Películas</h2>
      {peliculas && (
        <div>
          <strong>{peliculas.Title}</strong> ({peliculas.Year})
        </div>
      )}
    </div>
  );
}

export default MovieList;
