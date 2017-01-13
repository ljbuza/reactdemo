import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import { Nav, Navbar, NavItem, FormGroup, InputGroup, FormControl, DropdownButton, Panel, Table, Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import {LiveView} from './components/home';

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
            <LinkContainer to="/stuff">
                <NavItem>Advanced</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
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

class LiveView extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
class AdvancedView extends React.Component {
  render() {
    return (
      <div>
        <Row>
            <Col md={6}>
            <Panel collapsible defaultExpanded header="Modem Details">
                <Table bordered condensed hover>
                    <tbody>
                    <tr><td>Uptime</td><td>22 days 10 hours</td></tr>
                    <tr><td>Modem Description</td><td>ARRIS DOCSIS 3.0</td></tr>
                    <tr><td>Vendor</td><td>Arris Interactive, L.L.C.</td></tr>
                    <tr><td>Model</td><td>MG5225G</td></tr>
                    <tr><td>Software Version</td><td>7.14.74</td></tr>
                    <tr><td>DOCSIS Capability</td><td>3.0</td></tr>
                    <tr><td>Operating Mode</td><td>1.1</td></tr>
                    <tr><td>TFTP Server</td><td>209.55.6.101</td></tr>
                    <tr><td>DHCP Server</td><td>209.55.0.135</td></tr>
                    </tbody>
                </Table>
            </Panel>
            </Col>
            <Col md={6}>
            <Panel collapsible defaultExpanded header="RF Health">
                <Table bordered condensed hover>
                    <tbody>
                    <tr><td>Modem Resets</td><td className="bg-danger" data-toggle="tooltip" data-placement="top" title="Must be < 2">3</td></tr>
                    <tr><td>Lost Syncs</td><td>0</td></tr>
                    </tbody>
                </Table>
                <Table bordered condensed hover>
                    <tbody>
                    <tr><td>Upstream Ports</td><td>C/U4/6.0</td><td>C/U4/7.0</td></tr>
                    <tr><td>Up Frequency</td><td>36.0 Mhz</td><td>29.0 Mhz</td></tr>
                    <tr><td>T3 Timeouts</td><td>19</td><td>24</td></tr>
                    </tbody>
                </Table>
            </Panel>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <Panel collapsible defaultExpanded header="Event Log">
                <Table bordered condensed hover>
                    <thead>
                    <tr>
                    <th>Date Time</th><th>Event Level</th><th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td>2/4/2016 03:43</td><td className="bg-warning">Error</td><td>Video processor reset detected</td></tr>
                    <tr><td>2/4/2016 03:43</td><td>Notice</td><td>2-Way OK, UCID</td></tr>
                    <tr><td>2/3/2016 19:10</td><td className="bg-danger">Critical</td><td>TLV-11 Failed to set duplicate elements</td></tr>
                    </tbody>
                </Table>
            </Panel>
            </Col>
        </Row>
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

class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            TDS
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup bsSize="small">
              <InputGroup>
                <FormControl type="text" placeholder="Search" />
                <InputGroup.Button>
                  <Button bsSize="small"><span className="glyphicon glyphicon-search"></span></Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
        </Navbar.Form>
        <Navbar.Text pullRight>
       Customer View 
        </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <NavBar/>
    <Router history={browserHistory}>
    <Route path="cust" component={Menu}>
        <IndexRoute component={LiveView}/>
        <Route path="/stuff" component={AdvancedView} />
        <Route path="/contact" component={HistoryView} />
    </Route>
    </Router>
    </div>,
  document.getElementById('container'),
);

