import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SearchBar from './searchBar.jsx';
import MovieList from './movieList.jsx';
import MovieDetail from './movieDetail.jsx';

function Main() {
  const [nombre, setNombre] = useState('');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const handleSearch = (valor) => {
    setNombre(valor);
  };

  const handleMovieDetail = async (imdbID) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=ac557b99`
    );
    const data = await res.json();
    setPeliculaSeleccionada(data);
  };

  const handleBack = () => {
    setPeliculaSeleccionada(null);
  };

  return (
    <div>
      <h1 class="titulo">Buscador de Películas</h1>

      {peliculaSeleccionada ? (
        <>
          <button className="volver" onClick={handleBack}> Volver</button>
          <MovieDetail
            poster={peliculaSeleccionada.Poster}
            tituloCompleto={peliculaSeleccionada.Title}
            año={peliculaSeleccionada.Year}
            genero={peliculaSeleccionada.Genre}
            director={peliculaSeleccionada.Director}
            actores={peliculaSeleccionada.Actors}
            sinopsis={peliculaSeleccionada.Plot}
            duracion={peliculaSeleccionada.Runtime}
            idioma={peliculaSeleccionada.Language}
            pais={peliculaSeleccionada.Country}
            puntajeIMDb={peliculaSeleccionada.imdbRating}
          />
        </>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <MovieList nombre={nombre} onMovieDetail={handleMovieDetail} />
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);