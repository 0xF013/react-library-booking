import React from 'react';

class Book extends React.Component {
  render() {
    return <tr><td>{ this.props.data.name }</td></tr>;
  }
}

export default Book;

