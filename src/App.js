import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import MissionPage from './Pages/Missions/Missions';
import Rockets from './Pages/Rockets/Rockets';
import { getRockets } from './Redux/Rockets/rockets';
import Profile from './Pages/Profile/Profile';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getRockets());
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<MissionPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
