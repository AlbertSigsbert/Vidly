import React from "react";

class TableHeader extends React.Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    const order = sortColumn.path === path && sortColumn.order === "asc" ? "desc" : "asc";
    sortColumn.path = path;
    sortColumn.order = order;
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
     const {sortColumn} = this.props;
     if(column.path !== sortColumn.path ) return null;
     if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
     return <i className="fa fa-sort-desc"></i>
  };

  render() {
    return (
      <thead>
            <tr className="font-weight-bold">
                {this.props.columns.map((column) => (
                    <th 
                        key={column.path || column.key}
                        scope="col"
                        className="clickable"
                        onClick={() => this.raiseSort(column.path)}>
                        {column.label} { column.label ? this.renderSortIcon(column) : ''}
                    </th>
                ))}
            </tr>
      </thead>
    );
  }
}

export default TableHeader;
