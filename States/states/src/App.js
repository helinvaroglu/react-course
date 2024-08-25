import {useState} from 'react'

// useState is hook for using states.
// State is an object that keeps changeable variable

function App() {
  const [name, setName] = useState('Helin');   // [nameOfState, funcThatChangesIt]
  const [age, setAge] =  useState(23);
  const [friends, setFriends] = useState(['Ceren', 'Melike', 'Alara']);
  const [address, setAddress] = useState({ title: 'Istanbul', zip: 34786})

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Doga')}>Click</button>
      <button onClick={() => setAge(24)}>Click</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div>{friend}</div>
      ))}
      <br></br>
      {/* Adding new object to array by keeping old values */}
      <button onClick={() => setFriends([...friends,"Doga"])}>Add new friend</button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br></br>
      <button onClick={() => setAddress({title: 'Ankara', zip: 44444})}>
        Change address
      </button>
    </div>
  );
}

export default App;
