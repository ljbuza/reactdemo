import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import {HomeView} from './components/home';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li>Home</li>
          <li>Stuff</li>
          <li>Contact</li>
          </ul>
          <div className="content">
            {this.props.children}
          </div>
          </div>
      );
  }
}

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="cust" component={Menu}>
        <IndexRoute component={HomeView}/>
    </Route>
    </Router>,
  document.getElementById('container'),
);

