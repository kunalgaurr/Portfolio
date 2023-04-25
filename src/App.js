import { useEffect, useState } from 'react';
import './App.css';
import { Loading } from './Components/Loading/Loading';
import { Topbar } from './Components/Topbar/Topbar';
import { useSpring, animated } from '@react-spring/web';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Work } from './Pages/Work/Work';
import { Contact } from './Pages/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleMouseMove = (e) => {
    setPositionX(e.clientX);
    setPositionY(e.clientY);
  };

  const trailer = useSpring({
    position: 'absolute',
    top: `${positionY}px`,
    left: `${positionX}px`,
    height: '10px',
    width: '10px',
    borderRadius: '50px',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  });

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener('load', handleLoad);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="app-container" onMouseMove={handleMouseMove}>
      <animated.div id="mouse-trailer" style={trailer}></animated.div>
      <div id="app-wrapper">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
