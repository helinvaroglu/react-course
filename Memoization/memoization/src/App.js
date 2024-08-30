import './App.css';

import {useState, useMemo} from 'react';
import Header from './components/Header';

// Memoziation helps preventing unnecessary rendering.

function App() {

  const [number, setNumber] = useState(0);

  // Since there is an object sent with header, it would render everytime.
  // If we use data outside of the function, it would solve this problem.
  // If we need to use this inside func, use useMemo hook.
  const data = useMemo(() => {
    return {name: 'Helin'};
  }, []);

  return (
    <div className="App">

      <Header data={data} />

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    
    </div>
  );
}

export default App;
