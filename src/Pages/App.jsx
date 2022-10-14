import './App.css'
import { Routes, Route } from 'react-router-dom'
import UnderConstruction from './UnderConstruction'
import Clues from './Clues'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UnderConstruction />} />
      <Route exact path="/gotem" element={<Clues />} />
    </Routes>

  );
}

export default App;
