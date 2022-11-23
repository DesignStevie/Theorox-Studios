import './App.css'
import { Routes, Route } from 'react-router-dom'
import UnderConstruction from './UnderConstruction'
import Home from './Home';
import UXUIWork from './UXUIWork';
import ArtAndDesign from './ArtAndDesign';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UnderConstruction />} />
      <Route path='/home' element={<Home />} />
      <Route path='/my-work' element={<UXUIWork />} />
      <Route path='/extra' element={<ArtAndDesign />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

  );
}

export default App;
