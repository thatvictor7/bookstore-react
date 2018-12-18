import React, { Component } from 'react';
import './App.css';
import { Row, Col, Button } from 'react-bootstrap'
import Navs from './components/navs'
import Display from './components/display'
import Cart from './components/cart'


class App extends Component {

  state = {
    books: []
  }

  addToCart = async(id) => {
    // console.log("180" + id)
    await fetch('http://localhost:8082/api/books/cart/add/' + id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
    },
    body: JSON.stringify({
      "book.inCart": true
    })
   })
   const updatedBook = this.state.books.map(book => {
        if (book.id === id) {
          book["inCart"] = !book["inCart"]
        }
        return book
      })
      this.setState({ books: updatedBook})
      // console.log(this.state)
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
            <Display addToCart={this.addToCart} booklist={this.state.books}/>
          </Col>
          <Col className='test'>Cart:
            <Cart addedToCart={this.state.books}/>
            <Button variant="primary" size="lg" block>
              Place Your Order
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
