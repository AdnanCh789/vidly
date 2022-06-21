import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, col) => {
    if (col.content) {
      return col.content(item);
    }
    return _.get(item, col.path);
  };
  creatKey = (item, col) => {
    return item._id + (col.path || col.name);
  };
  render() {
    const { data, cols } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {cols.map((col) => (
              <td key={this.creatKey(item, col)}>
                {this.renderCell(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
