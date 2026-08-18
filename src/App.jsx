import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import Galerie from './Pages/Galerie/Galerie';
import RendezVous from './Pages/RendezVous/RendezVous';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;