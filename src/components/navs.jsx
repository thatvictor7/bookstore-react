import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Navs = () => {
    return(
      <Navbar className="nav colorfy" bg="light" variant="light">
        <Navbar.Brand className="colorfy" href="#home">gBookstore</Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar>
    )
}

export default Navs