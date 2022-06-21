import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlightForm } from './components/FlightForm';
import { Error } from './pages';
import { Landing } from './pages';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //<AppNav/>
    <BrowserRouter>
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
