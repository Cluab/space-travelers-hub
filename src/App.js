import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import MissionPage from './Pages/Missions/Missions';
import Rockets from './Pages/Rockets/Rockets';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
