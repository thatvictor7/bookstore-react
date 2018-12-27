import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const Navs = (props) => {
  const { books } = props
  let suggestionList = []
  { books.map(book => suggestionList.push(book.title) && suggestionList.push(book.author))}
    return(
      <Navbar className="nav colorfy" bg="light" variant="light" fixed="top">
        <Navbar.Brand className="colorfy" href="#home">gBookstore</Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {}
          <Typeahead options={suggestionList} placeholder="Search" className="mr-sm-4"/>
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar>
    )
}

export default Navs