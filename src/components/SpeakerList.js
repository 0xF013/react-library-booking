import React from 'react';
import Speaker from './Speaker';

export default class SpeakerList extends React.Component {
  state = {
    speakersData: [
      {
        id: 1,
        name: 'Conan',
        occupation: 'Warrior'
      },
      {
        id: 2,
        name: 'Triss',
        occupation: 'Mage'
      }
    ]
  };

  beforeUnload() {
    return 'Timers data will be lost. Proceed?'
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeUnload);
  }

  render() {
    return (
      <div>
        <h1>Speakers</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Occupation</th>
              <th className="col-md-1">Status</th>
              <th className="col-md-1"></th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.speakersData.map(speakerDatum => <Speaker key={ speakerDatum.id } { ...speakerDatum } />)
          }
          </tbody>
        </table>
      </div>
    );
  }
}
