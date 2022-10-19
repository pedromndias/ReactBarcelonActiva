import React from "react";
import { useParams } from "react-router-dom";

function Refugis() {
    console.log("parameters", useParams());
    const { id } = useParams();
    return(
        <>
            <h1>Llista de refugis</h1>
            <ul>
                <li><a href="/refugis/1">Refugis de Sant Salvador</a></li>
                <li><a href="/refugis/2">Refugis de Pradell</a></li>
            </ul>
            <h1>El refugi és: {id}</h1>
        </>
    )
}

export default Refugis;