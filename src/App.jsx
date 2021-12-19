import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import SingleProject from './pages/SingleProject';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
