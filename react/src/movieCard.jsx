function movieCard(props) {
  return (
    <>
        <div>
            <img src={props.poster} alt="poster" />
            <h2>{props.titulo}</h2>
            <h3>{props.año}</h3>
            <h3>{props.tipo}</h3>
        </div>
    </>
  );
}
export default movieCard;