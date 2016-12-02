import React from 'react';
import List from './List';
import TolearnForm from './TolearnForm';
import Filter from './Filter';

class TolearnApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTolearnItem = this.addTolearnItem.bind(this);
    this.onTolearnClick = this.onTolearnClick.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.filteredItems = this.filteredItems.bind(this);
    this.state = { items: [], id: 0, filter: 'All' };
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  filteredItems() {
    switch(this.state.filter) {
      case 'All':
        return this.state.items;
      case 'Study':
        return this.state.items.filter( item => !item.complete)
      case 'Understood':
        return this.state.items.filter( item => item.complete)
      default:
        return;
    }
  }

  onTolearnClick(id) {
    let items = this.state.items.map( item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      }
      return item;
    });

    this.setState({ items });
  }


  addTolearnItem(name) {
    let id = ++this.state.id;
    this.setState({
      items: [
        {name, id, complete: false },
        ...this.state.items
      ], id
    });
  }


  render() {
    return (
      <div>
        <TolearnForm addTolearnItem={this.addTolearnItem} />
        <List items={this.filteredItems()} onTolearnClick={this.onTolearnClick} />
        <Filter setFilter={this.setFilter} currentFilter={this.state.filter} />
      </div>
    )
  }
}

export default TolearnApp;
