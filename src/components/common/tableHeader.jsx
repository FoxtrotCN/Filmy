import React from "react";

function TableHeader({ columns, sortColumn, onSort }) {
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
