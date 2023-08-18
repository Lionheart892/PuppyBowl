import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlayerList from './Components/PlayerList';
import PlayerDetail from './Components/PlayerDetails';
import PlayerForm from './Components/PlayerForm';

function Home() {
  return <h2>Welcome to the Puppy Bowl App</h2>;
}

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
              <Link to="/">Player List</Link>
            </li>
            <li>
              <Link to="/create">Create Player</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={PlayerList} />
          <Route path="/create" component={PlayerForm} />
          <Route path="/players/:id" component={PlayerDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
