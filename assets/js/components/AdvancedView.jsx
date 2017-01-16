import React from 'react';
import { Panel, Table, Row, Col } from 'react-bootstrap';

export default class AdvancedView extends React.Component {
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
                  <tr>
                    <td>Modem Resets</td>
                    <td
                      className="bg-danger"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Must be < 2"
                    >3</td>
                  </tr>
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
                  <tr>
                    <td>2/4/2016 03:43</td>
                    <td className="bg-warning">Error</td>
                    <td>Video processor reset detected</td>
                  </tr>
                  <tr><td>2/4/2016 03:43</td><td>Notice</td><td>2-Way OK, UCID</td></tr>
                  <tr>
                    <td>2/3/2016 19:10</td>
                    <td className="bg-danger">Critical</td>
                    <td>TLV-11 Failed to set duplicate elements</td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
