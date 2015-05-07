import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: 'Book one'
        },
        {
          name: 'Book two'
        }
      ]
    };
  }

  render() {
    return <div><h1>Book list</h1>
    <table>
    {
      this.state.books.map((book) => {
        return <Book data={book} />
      })
    }
    </table>
    </div>;
  }
}

export default BookList;

