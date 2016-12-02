import React from 'react';
import Item from './Item';

class List extends React.Component {
  render(){
    let items = this.props.items.map( (item) => {
      return (<Item key={item.id} {...item} onTolearnClick={this.props.onTolearnClick} />)
    });

    return (
      <div>
      <ul>
        {items}
      </ul>
    </div>
    )
  }
}

export default List;
