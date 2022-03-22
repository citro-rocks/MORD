import {Route, Routes } from 'react-router-dom';

import './App.css';
import Welcome from './pages/Home/WelcomePage';
import Start from './pages/Start/StartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/start' element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
