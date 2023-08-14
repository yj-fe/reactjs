import React from 'react'
import { AiOutlineSwap, AiOutlineSafety, AiFillApple, AiOutlineStock } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { BsAirplane } from "react-icons/bs";

const AssetBox = ({ icon, text }) => (
  <div className="flex-1 rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20 flex flex-col items-center justify-center">
    {icon}
    <p className="mt-2 text-gray-500 text-sm">{text}</p>
  </div>
);

const StockBox = ({ icon, title, subtitle, price, change, color }) => (
  <div className="rounded-lg bg-gray-200 bg-opacity-10 p-4 h-20 flex justify-between">
    <div className='flex'>
      <div className={`flex justify-center items-center w-11 h-11 ${color} bg-opacity-70 rounded-full mr-2  border border-opacity-50 border-white`}>
        {icon}
      </div>
      <div className="flex flex-col text-white items-start">
        <p className=''>{title}</p>
        <p className='text-xs'>{subtitle}</p>
      </div>
    </div>
    <div className="flex flex-col text-white items-end">
      <p className='text-lg'>$ {price}</p>
      <p className='text-sm'>{change}</p>
    </div>
  </div>
);

  

function MainPage() {
  const assetBoxData = [
    { icon: <FaCoins color="white" size={40}/>, text: 'Send' },
    { icon: <AiOutlineSwap color="white" size={40}/>, text: 'Swap' },
    { icon: <AiOutlineSafety  color="white" size={40}/>, text: 'Deposit' },
  ];
  const favoriteStocks = [
    {
      icon: <AiOutlineStock color='white' size={30} />,
      title: 'Dow Jones',
      subtitle: 'Dow Jones Industrial Average',
      price: '35,281.40',
      change: '+ 0.06',
      color: 'bg-yellow-200'
    },
    {
      icon: <AiFillApple color='white' size={30} />,
      title: 'AAPL',
      subtitle: 'Apple Inc.',
      price: '177.79',
      change: '+ 0.06',
      color: 'bg-green-200'
    },
    {
      icon: <BsAirplane color='white' size={30} />,
      title: 'BA',
      subtitle: 'The Boeing Company',
      price: '177.79',
      change: '+ 0.06',
      color: 'bg-blue-200'
    }
  ];

  return (
    <>
    {/* 내 자산 */}
      <div className="flex flex-col items-center lg:hidden">
        <h2 className={`mt-32 font-normal text-gray-500`}>My balance</h2>
        <h2 className={`text-3xl pt-3 text-white font-bold`}>$1,234.00</h2>
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
          {favoriteStocks.map((stock, index) => (
            <StockBox
              key={index}
              icon={stock.icon}
              title={stock.title}
              subtitle={stock.subtitle}
              price={stock.price}
              change={stock.change}
              color={stock.color}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MainPage