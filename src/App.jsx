import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import "./animations/index";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Preloader from "./components/Preloader";

const App = () => {
  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300
    selection:text-cyan-900">

      <div className="container mx-auto px-8"></div>
      {/* <Preloader /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      </div> 
  )
}

export default App