import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <SideBar />
      <div className="md-grid">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
