import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortCol = { ...this.props.sortCol };
    if (sortCol.path === path)
      sortCol.order = sortCol.order === "asc" ? "desc" : "asc";
    else {
      sortCol.path = path;
      sortCol.order = "asc";
    }
    this.props.onSort(sortCol);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.cols.map((col) => (
            <th
              key={col.path || col.name}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
