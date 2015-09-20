import React from 'react';
import Timers from 'react-timers';
import reactMixin from 'react-mixin';

import BookingButton from './BookingButton.js';
import BookingStatusLabel from './BookingStatusLabel.js';


@reactMixin.decorate(Timers)
export default class Speaker extends React.Component {
  static SECONDS_BEFORE_UNBOOKING = 30 * 60;
  state = {
    isBooked: false,
    secondsLeft: Speaker.SECONDS_BEFORE_UNBOOKING
  };

  _doUnbook() {
    this.clearIntervals();
    this.setState({
      isBooked: false,
      secondsLeft: Speaker.SECONDS_BEFORE_UNBOOKING
    });
  }

  _tick() {
    const currentSecondsLeft = this.state.secondsLeft;
    if (currentSecondsLeft === 0) {
      this._doUnbook();
    } else {
      this.setState({
        secondsLeft: currentSecondsLeft - 1
      });
    }
  }

  toggleBooking() {
    const currentState = this.state.isBooked;
    if (currentState) {
      if (confirm('Are you sure?')) {
        this._doUnbook();
      }
    } else {
      this.setState({
        isBooked: true
      });
      this.setInterval(this._tick, 1000);
    }
  }

  render() {
    return (
      <tr>
        <td>{ this.props.id }</td>
        <td>{ this.props.name }</td>
        <td>{ this.props.occupation }</td>
        <td>
          <BookingStatusLabel
            isBooked={ this.state.isBooked }
            secondsLeft={ this.state.secondsLeft } />
        </td>
        <td>
          <BookingButton
            isBooked={ this.state.isBooked }
            onClick={ ::this.toggleBooking } />
        </td>
      </tr>
    );
  }
}
