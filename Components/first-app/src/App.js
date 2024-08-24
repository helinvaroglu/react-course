import './App.css';

import Header from './Components/header'

// gathering all components under "app" component
// component = function + return
// component names should start with uppercase

const name = "Helin";   //dynamic rendering a component
const isLoggedIn = true;

function App() {
  // called jsx. looks like html but actually js.
  // we need an outer fragment in order to make jsx work.
  return (
    <div className="App">
      <Header />
      {/* <p className="xyz">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <label htmlFor="myinput">
        Name
        <input id="myinput" />
      </label> */}

      <h1>
        { isLoggedIn && ` My name is ${name}.`}
      </h1>
    </div>
  );
}

export default App;
