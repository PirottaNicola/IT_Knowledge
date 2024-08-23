import './App.css';
import Articolo from './Components/Articolo';
function App() {


  return (
    <div className="App">
     <Articolo Titolo="Titolo dell'articolo" Contenuto="contenuto dell'articolo"></Articolo>
     <Articolo Titolo="Titolo dell'articolo" Contenuto="contenuto dell'articolo"></Articolo>
     <Articolo Titolo="Titolo dell'articolo" Contenuto="contenuto dell'articolo"></Articolo>
     <Articolo Titolo="Titolo dell'articolo" Contenuto="contenuto dell'articolo"></Articolo>
    </div>
  );
}

export default App;
