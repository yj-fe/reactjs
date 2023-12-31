import React, { useState } from 'react';
import Footer from '../../components/Main/Footer';

function UserPage() {

  return (
    <div className="App min-h-screen bg-slate-900">
      <div className="flex flex-col p-6">
        <div className="bg-gray-200 p-4 rounded-xl bottom-0 flex w-full h-16 justify-evenly">
          {/* 자산 - overview */}
          {/* 보고서 - reports */}
          {/* 고객센터 - info */}
        </div>
      </div>
      <div className="fixed flex w-full mb-0 p-5 bottom-0 z-10">
        <Footer activeIcon="user" />
      </div>
    </div>
  );
}

export default UserPage;
