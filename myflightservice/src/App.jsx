import { useState } from "react";
import UserContext, { user } from './contexts/UserContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav, AppFooter } from './features';
import { Landing, Error, AddFlight, ViewFlights, ManageFlights, EditFlight } from './pages';
import './App.css';

function App() {

  const [currUser, setCurrUser] = useState(user.guest);

    const toggleUser = () => {
        console.log('Change User')
        if (currUser === user.guest) {
            setCurrUser(user.assoc);
        } else if(currUser === user.assoc){
            setCurrUser(user.admin);
        }else {
            setCurrUser(user.guest);
        }
      }

  return (
    <UserContext.Provider value={currUser}>
      <BrowserRouter>
        <AppNav/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/flights/add" element={<AddFlight />} />
            <Route path="/flights/view" element={<ViewFlights />} />
            <Route path="/flights/manage" element={<ManageFlights />} />
            <Route path="/flights/edit" element={<EditFlight />} />
            <Route path="*" element={<Error />} />
          </Routes>
{/*
        <AppFooter/>
*/}
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
