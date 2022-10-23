import './App.css'
import { Routes, Route } from 'react-router-dom'
import UnderConstruction from './UnderConstruction'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<UnderConstruction />} />
    </Routes>

  );
}

export default App;
