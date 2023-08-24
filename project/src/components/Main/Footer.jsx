import React from 'react';
import { BiWallet } from 'react-icons/bi';
import { FiHome, FiUser } from 'react-icons/fi';
import { FaSearch, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function FooterIcon({ icon: Icon, text, isActive }) {
  return (
    <div className={`flex flex-col items-center ${isActive ? 'text-blue-800' : 'text-gray-600'}`}>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${
          isActive ? 'bg-blue-200 text-white' : ''
        }`}
      >
        <Icon className={`w-8 h-8`} />
      </div>
      <p className="text-xs mt-1">{text}</p>
    </div>
  );
}

function Footer({ activeIcon }) {
  return (
    <div className='flex w-full bg-slate-100 text-gray-600 h-20 rounded-3xl justify-around items-center'>
      <Link to="/"><FooterIcon icon={FiHome} text="home" isActive={activeIcon === 'home'} /></Link>
      <Link to="/search"><FooterIcon icon={FaSearch} text="search" isActive={activeIcon === 'search'} /></Link>
      <Link to="/asset"><FooterIcon icon={BiWallet} text="asset" isActive={activeIcon === 'asset'} /></Link>
      <Link to="/alerts"><FooterIcon icon={FaBell} text="alert" isActive={activeIcon === 'alert'} /></Link>
      <Link to="/account"><FooterIcon icon={FiUser} text="user" isActive={activeIcon === 'user'} /></Link>
    </div>
  );
}

export default Footer;
