import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import Rockets from './Pages/Rockets/Rockets';
import { getRockets } from './Redux/Rockets/rockets';

const App = () => {
  const dispatch = useDispatch();

  dispatch(getRockets());

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
