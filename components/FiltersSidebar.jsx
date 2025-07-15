"use client";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
export default function FiltersSidebar({
  filters,
  selectedFilters,
  setSelectedFilters,
}) {
  const [open, setOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState(() => {
    const initial = {};
    Object.keys(filters).forEach((key, i) => {
      initial[key] = i < 1;
    });
    return initial;
  });

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const values = new Set(prev[type] || []);
      values.has(value) ? values.delete(value) : values.add(value);
      return { ...prev, [type]: [...values] };
    });
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Button */}
      <button
        className="md:hidden text-sm text-white bg-brand px-4 py-2 rounded mb-4  "
        onClick={() => setOpen(true)}
      >
        <FiFilter />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-10 left-0 w-72 bg-white h-full z-30 mt-1 overflow-y-auto shadow-md transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-base font-bold text-primary uppercase">
            Filters
          </h2>
          <button
            className="text-sm text-third font-semibold hover:underline"
            onClick={() =>
              setSelectedFilters({
                Geography: [],
                sectors: [],
                tags: [],
                formats: [],
              })
            }
          >
            RESET
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 space-y-4">
          {Object.entries(filters).map(([filterKey, values]) => (
            <div key={filterKey} className="border rounded">
              <button
                onClick={() =>
                  setExpandedGroups((prev) => ({
                    ...prev,
                    [filterKey]: !prev[filterKey],
                  }))
                }
                className="w-full px-3 py-2 bg-gray-100 flex justify-between items-center text-sm font-medium capitalize"
              >
                {`${filterKey.replace(/_/g, " ")} (${
                  Object.keys(values).length
                })`}
                {expandedGroups[filterKey] ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </button>

              {expandedGroups[filterKey] && (
                <ul className="max-h-40 overflow-y-auto p-3 space-y-2">
                  {Object.entries(values).map(([key, count]) => {
                    const isChecked = selectedFilters[filterKey]?.includes(key);
                    return (
                      <li key={key}>
                        <label
                          className={`flex items-center gap-2 text-sm cursor-pointer px-2 py-1 rounded ${
                            isChecked
                              ? "bg-yellow-200 text-primary font-medium"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleFilter(filterKey, key)}
                            className="form-checkbox text-primary"
                          />
                          <span>{key}</span>
                          <span className="text-xs text-gray-500">
                            ({count})
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
