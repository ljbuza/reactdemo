import React from 'react';
import { Panel, Table, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

export default class LiveView extends React.Component {
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
                <Button bsStyle="primary" bsSize="small">Ping</Button>
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
