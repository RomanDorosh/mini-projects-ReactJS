import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import PalindromeChecker from './pages/PalindromeChecker';
import RomanNumeralConverter from "./pages/RomanNumeralConverter";
import CaesarScipher from "./pages/CaesarScipher";
import CurrencyConverter from "./pages/CurrencyConverter";
import RandomQuoteMachine from "./pages/RandomQuoteMachine";
import MarkdownPreviewer from "./pages/MarkdownPreviewer";
import DrumMachine from "./pages/DrumMachine";
import JavascriptCalculator from "./pages/JavascriptCalculator";
import TwentyfivePlusFiveClock from "./pages/TwentyfivePlusFiveClock";
import SurveyForm from "./pages/SurveyForm";
import ProductLandingPage from "./pages/ProductLandingPage";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palindromechecker" element={<PalindromeChecker />} />
        <Route path="/romannumeralconverter" element={<RomanNumeralConverter />} />
        <Route path="/caesarscipher" element={<CaesarScipher />} />
        <Route path="/currencyconverter" element={<CurrencyConverter />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/randomquotemachine" element={<RandomQuoteMachine />} />
        <Route path="/markdownpreviewer" element={<MarkdownPreviewer />} />
        <Route path="/drummachine" element={<DrumMachine />} />
        <Route path="/javascriptcalculator" element={<JavascriptCalculator />} />
        <Route path="/twentyfiveplusfiveclock" element={<TwentyfivePlusFiveClock />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/productlandingpage" element={<ProductLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
