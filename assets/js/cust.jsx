import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
// import {HomeView} from './components/home';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div bsStyle="pills" activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1}><Link to="cust">Home</Link></NavItem>
            <NavItem eventKey={2}><Link to="/stuff">Stuff</Link></NavItem>
            <NavItem eventKey={3}><Link to="/contact">Contact</Link></NavItem>
        </div>
            <div className="content">
              {this.props.children}
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

