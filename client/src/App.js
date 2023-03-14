import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Research from './Pages/Research/Research';
import Project from './Pages/Projects/Project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
