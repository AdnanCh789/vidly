import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ cols, onSort, sortCol, data }) => {
  return (
    <table className="table">
      <TableHeader cols={cols} sortCol={sortCol} onSort={onSort} />
      <TableBody data={data} cols={cols} />
    </table>
  );
};

export default Table;
