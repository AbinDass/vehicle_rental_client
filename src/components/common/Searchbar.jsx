import React, { useState } from 'react'

const Searchbar = ({onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(query);
      }
    };
  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="md:w-[400px] p-3 pr-12 rounded-md shadow-md bg-common-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-3 p-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17.25 10.5A6.75 6.75 0 1110.5 3.75a6.75 6.75 0 016.75 6.75z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar
