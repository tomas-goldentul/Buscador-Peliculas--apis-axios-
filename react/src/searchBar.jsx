import { useState } from "react";
function SearchBar({ onSearch }) {
    const [nombre, setNombre] = useState('');
    const handleChange = (e) => {
        setNombre(e.target.value)

    }
    const handleClick = () => {

        if (onSearch) {
            onSearch(nombre)
            
        }
    }
    
    return (
        <div className="searchBar">
            <input type="text" placeholder="Ingresa el nombre de la pelicula" value={nombre} onChange={handleChange} />
            <button onClick={handleClick}>Buscar</button>  
            
        </div>
    )
}
export default SearchBar;   