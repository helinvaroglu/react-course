import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// pages
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import User from './components/User';


// React router lets you define routes in your application. 
// Each route is associated with a specific React component 
// that renders only that component.

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          {/* Dynamic Route for User with ID */}
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
