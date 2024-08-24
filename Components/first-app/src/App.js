import './App.css';

import Header from './Components/header';
import User from './Components/user';

// gathering all components under "app" component
// component = function + return
// component names should start with uppercase

// prop is for getting a parameter to component


function App() {
  // called jsx. looks like html but actually js.
  // we need an outer fragment in order to make jsx work.
  return (
    <div className="App">
      <Header />

      <User 
        name="Helin" 
        surname="Varoglu" 
        isLoggedIn={false}
        friends={["Ceren", "Doga", "Melike"]}
      />

      {/* <p className="xyz">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <label htmlFor="myinput">
        Name
        <input id="myinput" />
      </label> */}

    </div>
  );
}

export default App;
