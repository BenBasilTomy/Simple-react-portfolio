
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/experience/experience";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/*<About />*/}
      <Skills />
      
      <Education />

      
      <Contact />
    </div>
  );
}

export default App;
