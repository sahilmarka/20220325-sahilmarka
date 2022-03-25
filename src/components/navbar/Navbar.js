import React from 'react';
import './Navbar.scss'
import { arrow } from 'assets/images';

const Navbar = () => {
  return (
    <nav className=''>
      <div className='flex space-between align-center'>
        <div className='logo'>Your logo</div>
        <div className='flex space-between align-center'>
          <li className='nav-text mr-18 p-18'>Explore</li>
          <li className='nav-text mr-18 p-18'>About us</li>
          <li className='mr-18 p-18'>
            <div className='flex align-center gap-4'>
              <span className='nav-text'>Cities</span>
              <img src={arrow} />
            </div>
          </li>
          <li className='nav-text p-18 call-button'>
            Call
          </li>
        </div>
      </div>
    </nav>
  )
}

export default Navbar