import React from 'react';
import './GoalList.css';
//è buona norma fare dei file css per ogni componente, per evitare di fare confusione in un unico file.
//in ogni caso i css sono applicati globalmente alla pagina, quindi devo comunque usare nomi di id e classi univoci.

const GoalList = props => {
    return (
        <ul className="goal-list">
            {
                props.goals.map(g => {
                    return <li key={g.id}>{g.text}</li> //i map the object array in a jsx array that the browser can render
                })
            }
        </ul>
    )
};

export default GoalList;
