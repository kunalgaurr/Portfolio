import './App.css';
import { Layout } from './Components/Layout/Layout';
import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <Layout>
      <div id="app-container">
        <Home />
        <About />
      </div>
    </Layout>
  );
}

export default App;
