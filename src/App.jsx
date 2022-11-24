import { Routes, Route } from 'react-router-dom'
import UnderConstruction from './Pages/UnderConstruction'
import Home from './Pages/Home';
import MyWork from './Pages/MyWork';
import ArtAndDesign from './Pages/ArtAndDesign';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UnderConstruction />} />
      <Route path='/home' element={<Home />} />
      <Route path='/my-work' element={<MyWork />} />
      <Route path='/extra' element={<ArtAndDesign />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

  );
}

export default App;
