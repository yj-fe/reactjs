import React from 'react';

function AlertBox({ message, date }) {
  return (
    <div className="p-4 bottom-0 flex w-full bg-white opacity-80 justify-between gap-3">
      <p className="text-sm font-semibold text-blue-900 flex text-left">{message}</p>
      <p className="text-xs text-blue-500 text-right">{date}</p>
    </div>
  );
}

export default AlertBox;
