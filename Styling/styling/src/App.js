import './App.css';

// We need to enter styling as an object
// For every component, create their owm css file and use module css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{ color: "red", backgroundColor: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </header>
    </div>
  );
}

export default App;
