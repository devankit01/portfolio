import "./css/App.css";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Lang from "./components/Lang";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <hr />
      <LandingPage />

      {/* <p style={{ textAlign: "center" }}>
        <lord-icon
          src="https://cdn.lordicon.com/xwjtkymn.json"
          trigger="loop"
          colors="primary:#fffff,secondary:#e83a30"
          scale="44"
          axis-x="47"
          style={{ width: "60px", height: "60px",zIndex : "0", }}
        ></lord-icon>
      </p> */}

      <About />
      <Service />
      <Experience />
      <Lang />
      <Projects />
    </div>
  );
}

export default App;
