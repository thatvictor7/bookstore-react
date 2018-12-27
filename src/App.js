import React, { Component } from 'react';
import './App.css';
import { Row, Col,ProgressBar } from 'react-bootstrap'
import Navs from './components/navs'
import Display from './components/display'
import Cart from './components/cart'


class App extends Component {

  state = {
    books: []
  }

  addToCart = async(id,inCart) => {
    await fetch('http://localhost:8082/api/books/cart/add/' + id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
    },
    body: JSON.stringify({
      ["book.inCart"]: inCart
    })
   })
   const updatedBook = this.state.books.map(book => {
        if (book.id === id) {
          book["inCart"] = inCart
        }
        return book
      })
      this.setState({ books: updatedBook})
      console.log(this.state)
  }

  async componentDidMount() {
    let res = await fetch('http://localhost:8082/api/books')
    let jsonRes = await res.json()
    this.setState({ books: jsonRes })
  }

  render() {
    return (
      <div className="App">
        <Navs books={this.state.books}/>
        <Row>
          <Col xs={8}>
            {this.state.books ? <Display addToCart={this.addToCart} booklist={this.state.books}/> : <ProgressBar animated now={45} />}
            {/* <Display addToCart={this.addToCart} booklist={this.state.books}/> */}
          </Col>
          <Col className='test'>
            <Cart addedToCart={this.state.books}/>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
