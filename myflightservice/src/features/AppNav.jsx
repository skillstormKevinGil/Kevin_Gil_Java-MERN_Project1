import './features.css';
import '../App.css';
import logoImg from '../images/airplane-vector-logo.png';
// eslint-disable-next-line
{/*
import { useState } from "react";
import UserContext, { user } from '../contexts/UserContext.js';
*/}
export const AppNav = () => {     
     // eslint-disable-next-line  
{/*
    const [currUser, setCurrUser] = useState();

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

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
*/}
    return (
        <nav className='navigation'>
            <section className='nav'>
                <div className='navItem'>
                    <img src={logoImg} alt="Airline Logo"/>
                </div>
                <div className='navItem'>
                    <a href="/">Home</a>
                </div>
{
                <div className='navItem'>
                    <a href="/flights/add">Add Flight</a>
                </div>
}
                <div className='navItem'>
                    <a href="/flights/view">View Flights</a>
                </div>
{
                <div className='navItem'>
                    <a href="/flights/manage">Manage Flights</a>
                </div>
}
{/*
                <div className='navItem'>
                    <a href="/flights/edit">Edit Flight</a>
                </div>
*/}
{/*
                <div className='navItem' id='right'>
                    <button onClick={toggleUser}>Toggle Login</button>
                </div>
*/}
            </section>
        </nav>
    );
}