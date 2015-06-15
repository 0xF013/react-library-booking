import React from 'react';
import BookList from './components/BookList';

require("./styles/application.css.sass");

React.render(
  <BookList />,
  document.getElementById('body')
);

