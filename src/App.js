import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import Navs from './components/navs'
import Display from './components/display'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navs />
        <Row>
          <Col xs={8}>
            <Display />
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </div>
    );
  }
}

export default App;
