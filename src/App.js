import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Education } from './Pages/Education/Education';

const App = () => {
  return (
    <div id="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
