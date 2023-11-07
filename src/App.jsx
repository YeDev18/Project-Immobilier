import NavBar from './Component/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Agents from './Routes/Agents';
import Contact from './Routes/Contact';
import Listen from './Routes/Listen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Listen" element={<Listen />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
