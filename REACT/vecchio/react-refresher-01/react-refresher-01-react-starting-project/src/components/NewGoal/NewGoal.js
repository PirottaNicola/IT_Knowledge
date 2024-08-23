import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = (props) => {
    const [enteredText, setEnteredText] = useState('');

    const textChangeHandler = event => {
        setEnteredText(event.target.value); //now enteredText changes on every keystroke
    }
    const addGoalHandler = (event) => {
        event.preventDefault(); //per evitare il comportamento di default (chiamata al server)

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        props.onAddGoal(newGoal);

        setEnteredText(''); //reset the textfield
    };

    return (
        <form className="NewGoal" onSubmit={addGoalHandler  /*se metto le parentesi tonde viene eseguita immediatamente. Non le  metto in modo che react possa decidere il momento giusto, quando avviene il submit*/}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit"> Add Goal</button>
        </form>
    )
};

export default NewGoal;