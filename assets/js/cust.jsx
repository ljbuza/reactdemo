import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavBar from './components/layout/NavBar';
// import { LiveView, HistoryView } from './components';
import LiveView from './components/LiveView';
import AdvancedView from './components/AdvancedView';
import HistoryView from './components/HistoryView';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
        <div className="row">
          <Nav bsStyle="tabs">
            <LinkContainer to="cust" onlyActiveOnIndex={true}>
                <NavItem>Live</NavItem>
            </LinkContainer>
            <LinkContainer to="/advanced">
                <NavItem>Advanced</NavItem>
            </LinkContainer>
            <LinkContainer to="/history">
                <NavItem>History</NavItem>
            </LinkContainer>
          </Nav>
          </div>
          <br/>
          <div className="content row">
            {this.props.children}
          </div>
        </div>
      );
  }
}

ReactDOM.render(
  <div>
  <NavBar/>
    <Router history={browserHistory}>
    <Route path="/" component={Menu}>
        <IndexRoute component={LiveView}/>
        <Route path="/advanced" component={AdvancedView} />
        <Route path="/history" component={HistoryView} />
    </Route>
    </Router>
    </div>,
  document.getElementById('container'),
);

