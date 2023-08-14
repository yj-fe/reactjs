import React from 'react'
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';


function Header() {
  return (
    // <div className='fixed justify-between left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit'>
    <div className='fixed flex w-full h-24 bg-black left-0 top-0 mt-0 justify-between items-center border-b border-gray-500 shadow-3xl'> 
      {/* 로고*/}
      <p className='text-white ml-10 font-semibold text-4xl'>Logo</p>
      {/* 주식 미리보기 */}
      <p className='text-white hidden lg:inline'>주식 미리보기</p>
      {/* 검색, 알림, 계정 아이콘 */}
        <div className="flex space-x-4 mr-10">
          <FaSearch className="w-6 h-6 text-gray-500" /> {/* 검색 아이콘 */}
          <FaBell className="w-6 h-6 text-gray-500" /> {/* 알림 아이콘 */}
          <FaUser className="w-6 h-6 text-gray-500" /> {/* 계정 아이콘 */}
      </div>
    </div>
  )
}

export default Header