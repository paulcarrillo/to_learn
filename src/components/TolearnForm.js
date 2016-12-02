import React from 'react';

class TolearnForm extends React.Component {
    constructor(props) {
      super(props);
      this.addTolearn = this.addTolearn.bind(this);
    }

    addTolearn(e) {
      e.preventDefault();
      let item = this.refs.item.value;
      this.refs.form.reset();
      this.props.addTolearnItem(item);

    }

    render() {
      return(
        <form ref="form" onSubmit={this.addTolearn}>
          <input ref="item" placeholder="Add a Tolearn" />
        </form>
      )
    }
  }

export default TolearnForm;
