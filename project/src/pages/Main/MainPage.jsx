import React from 'react'
import { AiOutlineSwap } from "react-icons/ai";

const AssetBox = ({ icon, text }) => (
  <div className="flex-1 rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20 flex flex-col items-center justify-center">
    {icon}
    <p className="mt-2 text-gray-500 text-sm">{text}</p>
  </div>
);

function MainPage() {
  const assetBoxData = [
    { icon: <AiOutlineSwap />, text: 'Send' },
    { icon: <AiOutlineSwap />, text: 'Swap' },
    { icon: <AiOutlineSwap />, text: 'Deposit' },
  ];
  return (
    <>
    {/* 내 자산 */}
      <div className="flex flex-col items-center lg:hidden">
        <h2 className={`mt-32 font-normal text-gray-500`}>My balance</h2>
        <h2 className={`text-3xl pt-3 text-white`}>$1,234.00</h2>
        <div className="flex mt-4 w-full p-4 h-24 gap-4">
          {assetBoxData.map((item, index) => (
            <AssetBox key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
      {/* 즐겨찾기 주식 */}
      <div className="flex flex-col items-center">
        <h2 className={`mt-10 font-normal text-gray-500`}>My favorite</h2>
        <div className="flex flex-col mt-4 w-full p-4 gap-3">
          {/* 첫 번째 박스 */}
          <div className="rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20">
            {/* 내용 */}
          </div>
          {/* 두 번째 박스 */}
          <div className="rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20">
            {/* 내용 */}
          </div>
          {/* 세 번째 박스 */}
          <div className="rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20">
            {/* 내용 */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage