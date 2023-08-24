import React from 'react';

function AlertBox({ message, date }) {
  return (
    <div className="p-4 bottom-0 flex w-full bg-blue-200 opacity-80 justify-between">
      <p className="text-sm">{message}</p>
      <p className="text-xs">{date}</p>
    </div>
  );
}

export default AlertBox;
