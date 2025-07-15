"use client";
import FiltersSidebar from "@/components/FiltersSidebar";
import { fetchDatasets } from "@/lib/fetchDatasets";
import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchHeader from "@/components/SearchHeader";
import PaginationFooter from "@/components/PaginationFooter";

export default function AllDataPage() {
  const [view, setView] = useState("list");
  const [order, setOrder] = useState("desc");
  const [datasets, setDatasets] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    Geography: [],
    sectors: [],
    tags: [],
    formats: [],
  });

  const [sort, setSort] = useState("recent");
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDatasets({
          searchValue,
          filters: selectedFilters,
          sort,
          order,
          rowsPerPage,
          currentPage,
        });

        setDatasets(data.results || []);
        setFilters(data.aggregations || {});
        setTotalPages(Math.ceil((data.total || 0) / rowsPerPage));
      } catch (error) {
        console.error("Error fetching datasets:", error);
      }
    };
    getData();
  }, [selectedFilters, searchValue, sort, order, rowsPerPage, currentPage]);

  return (
    <div>
      <div className="w-full">
        {" "}
        <Breadcrumbs />
      </div>

      <div className="md:flex gap-10 flex-grow container mx-auto px-4 py-6">
        <div className="hidden md:block w-full md:w-64 shrink-0">
          <FiltersSidebar
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        <div className="flex-1">
          <SearchHeader
            view={view}
            setView={setView}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sort={sort}
            setSort={setSort}
            order={order}
            setOrder={setOrder}
          />
          <div className="block md:hidden w-full">
            <FiltersSidebar
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          {datasets.length === 0 ? (
            <p className="text-gray-500">No datasets found.</p>
          ) : view === "grid" ? (
            <GridView datasets={datasets} />
          ) : (
            <ListView datasets={datasets} />
          )}

          {totalPages > 1 && (
            <PaginationFooter
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
