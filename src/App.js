import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import Navs from './components/navs'
import Display from './components/display'


class App extends Component {

  state = {
    books: []
  }

  async componentDidMount() {
    let res = await fetch('http://localhost:8082/api/books')
    let jsonRes = await res.json()
    this.setState({ books: jsonRes })
  }

  render() {
    return (
      <div className="App">
        <Navs/>
        <Row>
          <Col xs={9}>
            <Display booklist={this.state.books}/>
          </Col>
          <Col className='test'>Cart:</Col>
        </Row>
      </div>
    );
  }
}

export default App;
