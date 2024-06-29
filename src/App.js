import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Ahome from './components/Ahome';
import Fournisseur from './components/Fournisseur';
import Groupefou from './components/Groupefou';
import Mouvement from './components/Mouvement';
import Article from './components/Article';
import Navbar from './components/Navbar';
import Reception from './components/Reception';
import Expedition from './components/Expedition';
import Login from './components/Login';
import Choose from './components/Choose';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWrapper />
        <Routes>
          <Route path='/' element={<Ahome />} />
          <Route path='/Fournisseur' element={<Fournisseur />} />
          <Route path='/Groupefou' element={<Groupefou />} />
          <Route path='/Mouvement' element={<Mouvement />} />
          <Route path='/Article' element={<Article />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Reception' element={<Reception />} />
          <Route path='/Expedition' element={<Expedition />} />
          <Route path='/Choose' element={<Choose />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavbarWrapper() {
  const location = useLocation();
  const hiddenPaths = ['/Reception', '/Expedition', '/Login' , '/Choose'];
  const hideNavbar = hiddenPaths.includes(location.pathname);
  return !hideNavbar && <Navbar />;
}

export default App;
