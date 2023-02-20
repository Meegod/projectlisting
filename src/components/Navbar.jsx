import React from 'react'
import logo from '../assets/logo.svg';
import code from '../assets/code.jpg';
import {Link} from 'react-router-dom';
import  authContext from "../context/AuthContext";
import { useContext } from "react";


function Navbar() {
  const{login,user,logout,signup}=useContext(authContext); 
  

  return (
    <>
    <nav className='bg-navbar'>
        <div className='navbar__wrapper container p-4 mt-0 d-flex justify-content-between p-0'>
        <div className='navar__logo '>
        <h4 className='mg-top text-white ml-2'>PROJECTLISTING</h4>
        </div>
        <div className='navbar__list mt-2'>
           <ul className='d-flex navbar__list__item'>
           <li><a href='#'>Projects</a></li>
           <li><a href='#'>About</a></li>
           <li>
            <Link to={login ?'signup':'Login'}>
             {login ?'Logout':'Login'}
          </Link>
          <span className='badge bg-primary'>{user?.email}</span>
          </li>
           </ul>
        </div>
        </div>  
    </nav>
    <section className='container mt-5'>
        <div className='row'>
            <div className='col-md-12 mx-auto text-center mt-5'>
          <h1 className='text-white font-bold display-1'>Get Access to all your 
          </h1>
           <span className='text-white fs-3'>
             Computer Science Source Code
            </span>
            <div className='mt-4 nav__link'>
            <Link to='/Login' className='bg-danger btn-padding rounded-pill'>Get Started</Link>
            </div>
             </div>    
        </div>
    </section>

    <section className='p-5 mt-4'>
      <div className='container border-line text-white'>
      <i className="bi bi-heart bg-primary"></i>
      <span className='lead  fw-bold fst-italic'>Popular Source Code</span>
      </div>
    </section>
    </>
    
  )
}

export default Navbar