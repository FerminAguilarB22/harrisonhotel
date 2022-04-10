import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./components/common/Navigation";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/pages/Rooms";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
