import {Route, Routes, Link } from 'react-router-dom';

import './App.css';
import gallery from './components/Apps/ImageViewer/gallery';
import ImageViewer from './components/Apps/ImageViewer/ImageViewer';
import MainHeader from './components/UI/Navbar';
import Authentication from './pages/AuthPage/AuthPage';
import Home from './pages/Home/Home';
import Start from './pages/Start/StartPage';

function App() {
  return (
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Authentication />} />
          <Route path='/start' element={<Start />} />
          <Route path='/gallery' element={<ImageViewer />} />
        </Routes>
    </div>
  );
}

export default App;
