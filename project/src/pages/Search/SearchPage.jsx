import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Footer from '../../components/Main/Footer';
import SearchResult from '../../components/Search/SearchResult';

function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="App min-h-screen bg-slate-900">
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-l-3xl focus:outline-none h-14"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className=" p-2 pr-4 h-14 bg-white rounded-r-3xl"
          onClick={handleSearch}
        >
          <FaSearch className='w-6 h-6'/>
        </button>
      </div>
      <div className="bg-gray-200 p-4 rounded-t-xl bottom-0 flex fixed w-full h-2/3">
        {showResults ? (
          <SearchResult />
        ) : (
          <div className="w-full flex items-center justify-center text-xl">
            {searchText.trim() !== '' ? (
              "Sorry, we couldn't find any results"
            ) : (
              "Find what you're looking for"
            )}
          </div>
        )}
      </div>
      <div className="fixed flex w-full mb-0 p-5 bottom-0 z-10">
        <Footer activeIcon="search" />
      </div>
    </div>
  );
}

export default SearchPage;
