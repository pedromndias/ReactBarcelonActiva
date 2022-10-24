import { useState, useEffect } from "react";

function Rutes() {

    const [articles, setArticulos] = useState([])

    useEffect(() => {
        fetch("https://scratchya.com.ar/react/datos.php")
            .then(res => res.json())
            .then(articles => setArticulos(articles))
    }, [])

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(art => {
                        return (
                            <tr key={art.codigo}>
                                <td>{art.codigo}</td>
                                <td>{art.descripcion}</td>
                                <td>{art.precio}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Rutes;