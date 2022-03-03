import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import HomePage from './pages/homepage';
import Skills from './pages/skills.js';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
