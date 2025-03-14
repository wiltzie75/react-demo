import { useState } from 'react'
import './App.css'
import Chase from '../components/Chase';

const dogs = [
  { id: 1, name: "Logan", breed: "Italian Greyhound", age: 14 },
  { id: 2, name: "Chase", breed: "Italian Greyhound", age: 12 },
  { id: 3, name: "Lincoln", breed: "Mixed Rescue", age: 6 },
];

function App() {
  const [count, setCount] = useState(0);
  const [bestDog, setBestDog] = useState(null);
  console.log(bestDog);

  return (
    <>
      <h1>Vite + React</h1>

      <Chase />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {bestDog && <h3>{bestDog} is awesome!</h3>}

        {dogs.map((dog) => {
          return <p key={dog.id} onClick={() => setBestDog(dog.name)}>{dog.name} is {dog.age} year old {dog.breed}</p>;
        })}
      </div>
    </>
  );
}

export default App
