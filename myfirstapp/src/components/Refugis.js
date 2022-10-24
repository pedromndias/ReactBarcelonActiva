import React from "react";
import { useParams } from "react-router-dom";

function Refugis() {
    const nombres = [1, 2, 3, 4, 5];
    const listRefus = nombres.map((nombre) => 
        <li key={nombre.toString()}><a href={`/refugis/${nombre}`}>Refugi {`${nombre}`}</a></li>
    )
    

    const { id } = useParams();
    return(
        <>
            <h1>Llista de refugis</h1>
            <ul>
                {listRefus}
            </ul>
            <h1>El refugi és: {id}</h1>
        </>
    )
}

export default Refugis;