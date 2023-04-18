import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAsc } from "@fortawesome/free-solid-svg-icons";
import { faSortDesc } from "@fortawesome/free-solid-svg-icons";

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

  const raiseSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <FontAwesomeIcon icon={faSortAsc} />;
    return <FontAwesomeIcon icon={faSortDesc} />;
  };
  return (
    <>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {raiseSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
