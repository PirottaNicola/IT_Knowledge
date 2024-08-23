import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {


  const [courseGoals, setCourseGoals] = useState([ //useState restituisce un array formato da oggetti contenenti lo stato attuale e la funzione necessaria ad aggiornarlo
    { id: 'cg1', text: "Finish the course" },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A session' }
  ])

  const addNewGoalHandler = (ng) => {
    // setCourseGoals(courseGoals.concat(ng)); //i create a new array, i use it to replace the old one
    setCourseGoals((prevCourseGoals) => { //miglior approccio, più sicuro e performante
      return prevCourseGoals.concat(ng);
    })
  }

  return (
    <div className="course-goals">
      <h2>Course goals:</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );

};


export default App;
