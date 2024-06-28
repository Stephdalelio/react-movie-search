import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:id" element={<MovieInfo />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
