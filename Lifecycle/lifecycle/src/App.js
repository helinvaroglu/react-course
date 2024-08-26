import {useState, useEffect} from "react";

// Catching rendering of a component in other words renewing new state of a component
// The hook useEffect is for understanding this cycle.

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("State updated.")
  }, [number]);

  useEffect(() => {
    console.log("Component has been mounted.")
  }, []);

  return (
    <div className="App">
     <h1>{number}</h1>
     <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
