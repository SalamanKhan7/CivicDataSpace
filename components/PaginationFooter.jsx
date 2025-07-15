"use client";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

export default function PaginationFooter({
  currentPage,
  totalPages,
  setCurrentPage,
  setRowsPerPage,
  rowsPerPage,
}) {
  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex justify-end items-center gap-2 p-3 bg-white shadow-md rounded-xl text-sm">
      <span className="mr-0 md:mr-2">Rows per page</span>
      <select
        value={rowsPerPage}
        onChange={handleRowsChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        {[5, 10, 15, 20, 25].map((val) => (
          <option key={val} value={val}>
            {val.toString().padStart(2, "0")}
          </option>
        ))}
      </select>

      <span className="ml-0 md:ml-4 ">
        Page <strong>{currentPage.toString().padStart(2, "0")}</strong> of{" "}
        <strong>{totalPages.toString().padStart(2, "0")}</strong>
      </span>

      {/* Pagination controls */}
      <div className="flex items-center text-primary gap-2 ml-0 md:ml-4">
        <button onClick={() => goToPage(1)} className="cursor-pointer">
          <FiChevronsLeft />
        </button>
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="cursor-pointer"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="cursor-pointer"
        >
          <FiChevronRight />
        </button>
        <button onClick={() => goToPage(totalPages)} className="cursor-pointer">
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
}
