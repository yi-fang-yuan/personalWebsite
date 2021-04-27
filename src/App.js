import './App.css';
import AboutMe from './components/About/AboutMe';
import Experience from './components/Experience/Experience';
import Intro from './components/firstPage/Intro';
import NavBar from './components/firstPage/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <AboutMe />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
