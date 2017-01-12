import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import {HomeView} from './components/home';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="container">
        <Nav bsStyle="pills">
            <LinkContainer to="cust" onlyActiveOnIndex={true}>
                <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/stuff">
                <NavItem>Stuff</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
                <NavItem>Contact</NavItem>
            </LinkContainer>
        </Nav>
        <div className="content">
            {this.props.children}
        </div>
        </div>
      );
  }
}

class HomeView extends React.Component {
    render() {
        return (<h1>Hello World</h1>);
    }
}
class StuffView extends React.Component {
  render() {
    return (
      <div>
      <h2>Stuff</h2>
      </div>
    );
  }
}


class ContactView extends React.Component {
  render() {
    return (
      <div>
      <h2>Contact</h2>
      </div>
    );
  }
}

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="cust" component={Menu}>
        <IndexRoute component={HomeView}/>
        <Route path="/stuff" component={StuffView} />
        <Route path="/contact" component={ContactView} />
    </Route>
    </Router>,
  document.getElementById('container'),
);

