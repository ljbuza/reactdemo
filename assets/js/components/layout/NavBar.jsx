import React from 'react';
import { Navbar, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends React.Component {
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
                    <Button bsSize="small"><span className="glyphicon glyphicon-search" /></Button>
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
