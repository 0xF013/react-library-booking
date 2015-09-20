import React from 'react';

export default class BookingStatusLabel extends React.Component {

  _pad(digits) {
    if (digits < 10) {
      digits = `0${digits}`;
    }
    return digits;
  }

  get className() {
    return `label label-${ this.props.isBooked ? 'danger': 'info' }`;
  }

  get text() {
    return this.props.isBooked ? 'Busy' : 'Free';
  }

  get timerVisibility() {
    return this.props.isBooked ? 'inline' : 'none';
  }

  get formattedSecondsLeft() {
    const
      minutes = this._pad(Math.floor(this.props.secondsLeft / 60)),
      seconds = this._pad(this.props.secondsLeft % 60);

    return `${ minutes }:${ seconds }`;
  }

  render() {
    return (
      <span className={ this.className } style={ {marginRight: 5} }>
        <span>{ this.text }</span>
        <span style={ {display: this.timerVisibility, marginLeft: 5 } }>{ this.formattedSecondsLeft }</span>
      </span>
    );
  }
}
