import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Layout } from './Components/Layout/Layout';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Education } from './Pages/Education/Education';
import { Home } from './Pages/Home/Home';
import { Work } from './Pages/Work/Work';

function App() {
  return (
    <Layout>
      <div id="app-container">
        <Home />
        <About />
        <Education />
        <Work />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
