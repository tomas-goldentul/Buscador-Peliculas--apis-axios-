import { useState, useEffect } from "react";
function loader() {
    const [text, setText] = useState('')
    const [mostrarImg, setMostrarImg] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setText('Paciencia')
        }, 3000)
    }, [])
    return (
        <>
            <div>
                {
                    mostrarImg ? (
                        <img src="https://loading.io/asset/810883"/>
                    ) : (
                        <h2>{text}</h2>
                    )
                }
            </div>
        </>
    )
}
export default loader