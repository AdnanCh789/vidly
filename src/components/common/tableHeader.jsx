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

  renderSortIcon = (col) => {
    const { sortCol } = this.props;
    if (col.path !== sortCol.path) return null;

    if (sortCol.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    } else {
      return <i className="fa fa-sort-desc"></i>;
    }
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.cols.map((col) => (
            <th
              className={"clickable"}
              key={col.path || col.name}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label} {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
