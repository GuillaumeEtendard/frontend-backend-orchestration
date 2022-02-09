import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => res.data)
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setCounter(result.counter);
        },
        (error) => {
          console.log(error)
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>Page count : {counter}</div>
    );
  }
}

export default App;