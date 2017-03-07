import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

const target = document.getElementById('container');

class Home extends React.Component {
  render() {
    return (<h1>Hi</h1>);
  }
}

// ReactDOM.render(<Home />, target);
