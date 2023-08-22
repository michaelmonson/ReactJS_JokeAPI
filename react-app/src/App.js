import React from 'react';

//React Router Dom is used to build single-page app's:
import {
  BrowserRouter as Router,  // Router Implementation
  Routes,                   // new component introduced in v6 and replaces "Switch"   
  Route,                    // conditionally shown component that renders some UI when its path matches the current URL
  Link                      // component used to create links to different routes and implement navigation around the App. (similar to HTML anchor tag)
} from 'react-router-dom';

//Pages and Routes:
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Jokes from "./pages/Jokes";
import Page404 from "./pages/Page404";

class App extends React.Component {
  render() {
    return (
      //aka "BrowserRouter alias"
      <Router>
        <div className="App">
            {/* Linked Menu Structure */}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jokes">Jokes</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/search">Search</Link></li>
            </ul>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jokes" element={<Jokes />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Page404 />} />
            </Routes>            
        </div>
      </Router>
    );
  }
}

export default App;