import React from 'react';

export default class BookingButton extends React.Component {

  get className() {
    return `btn btn-${ this.props.isBooked ? 'danger': 'success' } btn-xs`;
  }

  get text() {
    return this.props.isBooked ? 'Unbook' : 'Book';
  }

  render() {
    return (
      <button
        onClick={ () => this.props.onClick() }
        type="button"
        className={ this.className }>
          { this.text }
      </button>
    );
  }
}
