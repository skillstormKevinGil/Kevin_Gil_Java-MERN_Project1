import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { Landing, Error, AddFlight, ViewFlight } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <AppNav/>
      <Routes>
        {/* When the URL in the browser becomes /, toggle on the Landing page */}
        <Route path="/" element={<Landing />} />
        <Route path="/flights/add" element={<AddFlight />} />
        <Route path="/flights/view" element={<ViewFlight />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
