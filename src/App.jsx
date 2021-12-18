import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import projectsData from './assets/data/projects'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import SingleProject from './pages/SingleProject';

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [categories, setCategories] = useState([])
  console.log(projects);
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/project/:id">
        <SingleProject />
      </Route>
    </Router>
  );
}

export default App;
