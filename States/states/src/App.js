import {useState} from 'react'

// useState is hook for using states.
// State is an object that keeps changeable variable

function App() {
  const [name, setName] = useState('Helin');   // [nameOfState, funcThatChangesIt]
  const [age, setAge] =  useState(23);

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Doga')}>Click</button>
      <button onClick={() => setAge(24)}>Click</button>
    </div>
  );
}

export default App;
