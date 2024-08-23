import React from 'react';
import './Articolo.css';
const Articolo = (props) => {
    return(
        <div id='articolo'>
            <h2>{props.Titolo}</h2>
            <p>{props.Contenuto}</p>
        </div>
    );
}

export default Articolo;