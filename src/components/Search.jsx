import React from 'react';

const Search = ({ placeholder }) => {
  return (
    <>
      <div>
        <input
          type="search"
          className="lg:w-[300px] px-3 w-full py-2 text-black focus:outline-none rounded-xl border border-white"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Search;
