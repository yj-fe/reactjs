import React from 'react'
import { BiWallet } from 'react-icons/bi';
import { FiHome, FiUser } from 'react-icons/fi';
import { FaSearch, FaBell } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex w-full bg-slate-100 text-gray-600 h-16 rounded-xl justify-around items-center' >
      
      <div className="flex flex-col">
        <FiHome className='w-8 h-8'/>
        <p className="text-xs">home</p>
      </div>
      <div className="flex flex-col">
        <FaSearch className='w-8 h-8'/>
        <p className="text-xs">search</p>
      </div>
      <div className="flex flex-col">
        <BiWallet className='w-8 h-8'/>
        <p className="text-xs">asset</p>
      </div>
      <div className="flex flex-col">
        <FaBell className='w-8 h-8'/>
        <p className="text-xs">alert</p>
      </div>
      <div className="flex flex-col">
        <FiUser className='w-8 h-8'/>
        <p className="text-xs">user</p>
      </div>
    </div>
  )
}

export default Footer