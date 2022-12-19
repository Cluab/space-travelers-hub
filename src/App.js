import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Rockets from './Pages/Rockets/Rockets';

const App = () => (
  <div className="app">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
