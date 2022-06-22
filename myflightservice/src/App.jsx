import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlightForm } from './components/FlightForm';
import { AppNav } from './features';
import { Landing, Error } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <AppNav/>
      <Routes>
        {/* When the URL in the browser becomes /, toggle on the Landing page */}
        <Route path="/" element={<Landing />} />
        <Route path="/new-" element={<FlightForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
