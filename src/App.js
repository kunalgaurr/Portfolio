import './App.css';
import { Layout } from './Components/Layout/Layout';
import { About } from './Pages/About/About';
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
      </div>
    </Layout>
  );
}

export default App;
