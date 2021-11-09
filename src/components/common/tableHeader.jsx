import React from "react";

class TableHeader extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    const order =
      sortColumn.path === path && sortColumn.order === "asc" ? "desc" : "asc";
    sortColumn.path = path;
    sortColumn.order = order;
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
            <tr className="font-weight-bold">
                {this.props.columns.map((column) => (
                    <th
                        key={column.name || column.key}
                        scope="col"
                        onClick={() => this.raiseSort(column.name)}
                    >
                        {column.label}
                    </th>
                ))}
            </tr>
      </thead>
    );
  }
}

export default TableHeader;
