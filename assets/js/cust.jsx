import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import { Nav, NavItem, Panel, Table, Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import {LiveView} from './components/home';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="container">
        <Nav bsStyle="tabs">
            <LinkContainer to="cust" onlyActiveOnIndex={true}>
                <NavItem>Live</NavItem>
            </LinkContainer>
            <LinkContainer to="/stuff">
                <NavItem>Advanced</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
                <NavItem>History</NavItem>
            </LinkContainer>
        </Nav>
        <br/>
        <div className="content">
            {this.props.children}
        </div>
        </div>
      );
  }
}

class LiveView extends React.Component {
    render() {
        return (
            <div className="Container">
            <Grid>
                <Row>
                    <Col md={6}>
                    <Panel collapsible defaultExpanded header="Port Status">
                        <Table bordered condensed hover>
                            <tbody>
                            <tr><td>CMTS Port</td><td>C/U2/7.0</td></tr>
                            <tr><td>Total # of Modems</td><td>44</td></tr>
                            <tr><td>Online Modems</td><td>44</td></tr>
                            <tr><td>Online Percent</td><td>100%</td></tr>
                            </tbody>
                        </Table>
                    </Panel>
                    </Col>
                    <Col md={6}>
                    <Panel collapsible defaultExpanded header="Account Info">
                        <dl className="dl-horizontal">
                            <dt>BBX Account:</dt><dd>4670XXX</dd>
                            <dt>Type:</dt><dd>Residential</dd>
                            <dt>Status:</dt><dd>Active</dd>
                            <dt>Billing Account:</dt><dd>1234567890</dd>
                        </dl>
                    </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Panel collapsible defaultExpanded header="Modem Details">
                        <Table bordered condensed hover>
                            <tbody>
                            <tr><td>Modem Status</td><td className="bg-success">Online</td></tr>
                            <tr><td>Times Offline Today</td><td>0</td></tr>
                            <tr><td>US/DS Rate</td><td>768k / 3.07M</td></tr>
                            <tr><td>Upstream Power</td><td className="bg-success">45.7</td></tr>
                            <tr><td>Headend Recieve</td><td className="bg-success">-0.3</td></tr>
                            <tr><td>Upstream SNR</td><td className="bg-warning">34.7</td></tr>
                            <tr><td>Downstream SNR</td><td className="bg-success">36.9</td></tr>
                            <tr><td>Downstream Rcv</td><td className="bg-success">1.6</td></tr>
                            <tr><td>Benchmark</td><td>N/A</td></tr>
                            </tbody>
                        </Table>
                    </Panel>
                    </Col>
                    <Col md={6}>
                    <Panel collapsible defaultExpanded header="Equipment">
                        <Table bordered condensed hover>
                            <thead>
                            <tr>
                            <th>Equipment</th><th>Description</th><th>Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr><td>Cable Modem</td><td>SMC Networks, Inc.</td><td>00:13:F7:85:A5:86</td></tr>
                            </tbody>
                        </Table>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="small" onClick="">Ping</Button>
                            <Button bsStyle="danger" bsSize="small">Reset</Button>
                            <Button bsStyle="info" bsSize="small">Watch</Button>
                        </ButtonToolbar>
                    </Panel>
                    </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}
class AdvancedView extends React.Component {
  render() {
    return (
      <div>
      <h2>Advanced tab stuff goes here</h2>
      </div>
    );
  }
}


class HistoryView extends React.Component {
  render() {
    return (
      <div>
      <h2>History tab stuff goes here</h2>
      </div>
    );
  }
}

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="cust" component={Menu}>
        <IndexRoute component={LiveView}/>
        <Route path="/stuff" component={AdvancedView} />
        <Route path="/contact" component={HistoryView} />
    </Route>
    </Router>,
  document.getElementById('container'),
);

