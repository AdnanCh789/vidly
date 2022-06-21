import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import Table from "./common/table";

class MoviesTable extends Component {
  cols = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
      name: "like",
    },
    {
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
      name: "delete",
    },
  ];
  render() {
    const { movies, onSort, sortCol } = this.props;

    return (
      <Table onSort={onSort} sortCol={sortCol} data={movies} cols={this.cols} />
    );
  }
}

export default MoviesTable;
