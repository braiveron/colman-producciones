import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Team from "./Components/Team";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
