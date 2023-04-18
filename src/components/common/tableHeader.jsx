import React from "react";

function TableHeader({ sortColumn, onSort }) {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  const raiseSort = (path) => {
    const sortedColumn = { ...sortColumn };
    if (sortedColumn.path === path)
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    onSort(sortedColumn);
  };
  return (
    <>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
