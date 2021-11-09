import React from 'react';
import Like from './like';
class TableBody extends React.Component {
    
    render() { 
        const {data, columns, onLike, onDelete} = this.props;
        return   <tbody>
        {data.map((item) => (
          <tr key={item._id} id={item._id}>
            <th scope="row">{item.title}</th>
            {columns.map(column => (<td></td>))}
            
            {/* <td>
              <Like
                liked={item.liked}
                onClick={() => onLike(item)}
              />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>;
    }
}
 
export default TableBody;