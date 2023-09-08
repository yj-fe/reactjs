
import React, { useState } from 'react';
import Footer from '../../components/Main/Footer';
import SignupPage from './SignupPage';
import UserPage from './UserPage';

function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App min-h-screen bg-slate-900">
      {isLoggedIn ? <UserPage /> : <SignupPage />}
    </div>
  );
}

export default AccountPage;
