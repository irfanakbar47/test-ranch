'use client'

import React, { useState } from 'react'
import { ISearchProps } from './ISearchProps'

const Search = (props: ISearchProps) => {
  const { onSearch } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <form className="w-full mx-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /></svg>
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="What are you looking for?"
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none shadow-md"
          value={inputValue}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}

export default Search;