import React, { useState, useEffect } from 'react';
import AlertBox from '../../components/Alerts/AlertBox';
import Footer from '../../components/Main/Footer';

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const exampleAlerts = [
      { id: 1, message: '회원가입을 축하합니다', date: '23.08.24' },
      { id: 2, message: '계좌를 연결하세요', date: '23.08.25' },
    ];
    setAlerts(exampleAlerts);
  }, []);

  return (
    <div className="App min-h-screen bg-slate-900">
      <div className="flex flex-col p-4 gap-1">
        {alerts.map(alert => (
          <AlertBox key={alert.id} message={alert.message} date={alert.date} />
        ))}
      </div>
      <div className="fixed flex w-full mb-0 p-5 bottom-0 z-10">
        <Footer activeIcon="alert" />
      </div>
    </div>
  );
}

export default AlertsPage;
