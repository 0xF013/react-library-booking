import React from 'react';
import ReactDOM from 'react-dom';
import SpeakerList from './components/SpeakerList';

require("./styles/application.css.sass");

ReactDOM.render(
  <SpeakerList />,
  document.getElementById('body')
);

