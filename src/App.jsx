import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderX from "./components/HeaderX";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explorar from "./pages/Explorar";
import Comunidade from "./pages/Comunidade";

function App() {
  return (
    <Router>
      <HeaderX />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/comunidade" element={<Comunidade />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;