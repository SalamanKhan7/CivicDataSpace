"use client";

import { FiSearch } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
export default function SearchHeader({
  view,
  setView,
  searchValue,
  setSearchValue,
  sort,
  setSort,
  order,
  setOrder,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3 mb-4 ">
      {/* Search Bar */}
      <div className="relative flex-1 min-w-[250px] max-w-xl">
        <input
          type="text"
          placeholder="Start typing to search for any Dataset"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full pl-10 pr-4 py-1  px-2  md:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FiSearch
          className="absolute left-3 top-1.5 md:top-2.5 text-gray-400"
          size={18}
        />
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded ${
            view === "grid" ? " text-primary" : " hover:text-primary"
          }`}
        >
          <IoGridOutline className="text-xl md:text-3xl" />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded ${
            view === "list" ? " text-primary" : "hover:text-primary"
          }`}
        >
          <CiGrid2H className="text-xl md:text-3xl" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-1">
          {/* Ascending (Up Arrow) */}
          <div
            className={`cursor-pointer ${
              order === "asc"
                ? "text-primary"
                : "hover:text-primary text-gray-500"
            }`}
            onClick={() => setOrder("asc")}
            title="Sort Ascending"
          >
            <FaArrowUpLong className="text-xl md:text-2xl" />
          </div>

          {/* Descending (Down Arrow) */}
          <div
            className={`cursor-pointer ${
              order === "desc"
                ? "text-primary"
                : "hover:text-primary text-gray-500"
            }`}
            onClick={() => setOrder("desc")}
            title="Sort Descending"
          >
            <FaArrowDownLong className="text-xl md:text-2xl" />
          </div>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-2 py-2 md:px-4 md:py-3 rounded-md text-sm "
        >
          <option value={"recent"}>Latest Updated</option>
          <option value={"alphabetical"}>A-Z</option>
        </select>
      </div>
    </div>
  );
}
