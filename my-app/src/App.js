import {Route, Routes } from 'react-router-dom';

import './App.css';
import Welcome from './pages/Home/WelcomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/start' />
      </Routes>
    </div>
  );
}

export default App;
