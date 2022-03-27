import React from "react";
import Search from "./../icons/Search";

const styles = {
  search: `
  block w-full
  px-5 py-3.5
  text-white
  text-base text-neutral-600
  border border-transparent
  bg-gray-700 rounded-lg 
  focus:outline-none
  focus:border-transparent`,
};

const SearchBar: React.FC = () => (
  <div className="w-5/6 md:w-[657px] order-last lg:order-none">
    <form className="flex items-center w-full pl-4 rounded-lg bg-gray-700">
      <button type="button">
        <Search />
      </button>
      <input
        type="search"
        placeholder="Lorem ipsum"
        className={styles.search}
      />
    </form>
  </div>
);

export default SearchBar;
