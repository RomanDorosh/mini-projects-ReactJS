import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import PalindromeChecker from './pages/PalindromeChecker';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palindromechecker" element={<PalindromeChecker />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
