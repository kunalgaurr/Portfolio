import './App.css';
import { Layout } from './Components/Layout/Layout';
import { About } from './Pages/About/About';
import { Education } from './Pages/Education/Education';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <Layout>
      <div id="app-container">
        <Home />
        <About />
        <Education />
      </div>
    </Layout>
  );
}

export default App;
