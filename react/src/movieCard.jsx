import './movieCard.css'
function MovieCard(props) {
  return (
    <>
      <div className="movieGrid"> 
        <img src={props.poster} alt="poster" />
        <h2>{props.titulo}</h2>
        <h3>{props.año}</h3>
        <h3>{props.tipo}</h3>
        <button onClick={() => props.onMovieDetail(props.imdbID)}>Ver detalle</button>

      </div>
    </>
  );
}
export default MovieCard;