function MovieDetail(props) {
  return (
    <>
      <div>
        <img src={props.poster} alt={`Poster de ${props.tituloCompleto}`} />
        <h2>{props.tituloCompleto}</h2>
        <h3>{props.año}</h3>
        <h3>{props.genero}</h3>
        <h3>{props.director}</h3>
        <h3>{props.actores}</h3>
        <p>{props.sinopsis}</p>
        <h3>{props.duracion}</h3>
        <h3>{props.idioma}</h3>
        <h3>{props.pais}</h3>
        {props.puntajeIMDb && <h3>IMDb: {props.puntajeIMDb}</h3>}

      </div>
    </>
  );
}
export default MovieDetail;