import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import HomePage from './pages/homepage';
import Skills from './pages/skills.js';
import About from './pages/about';
import Education from './pages/education';
import Work from './pages/work';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <About/>
      <Skills/>
      <Work/>
      <Education/>
    </div>
  );
}

export default App;
