const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchDatasets({
  searchValue,
  filters,
  sort,
  order,
  rowsPerPage,
  currentPage,
}) {
  const params = new URLSearchParams();
  if (searchValue) params.append("query", searchValue);
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  if (currentPage) params.append("page", currentPage);
  if (rowsPerPage) params.append("size", rowsPerPage);
  Object.entries(filters).forEach(([key, values]) => {
    if (values.length > 0) {
      params.append(key, values.join("+"));
    }
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch datasets");
  return await res.json();
}
