import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const Cart = (props) => {
    const { addedToCart } = props
    let total = 0
    addedToCart.map(book => {
        // return total += book.price
        if(book.inCart) {
            return total += book.price
        }
    })
    return (
        <div className='test1'>   
            <h4>Cart:</h4>
            <ListGroup className="items">
                {addedToCart.map(book => {
                    return book["inCart"] ? <div><ListGroup.Item className="top">{book.title.slice(0, 20) + "...   €" + book.price+".00"}</ListGroup.Item> <ListGroup.Item className="bottom">{book.author}</ListGroup.Item> </div> : console.log('not added')
                })}
            </ListGroup>
            <ListGroup.Item>Total:   € {total}.00</ListGroup.Item>
            <Button className="submit" variant="primary" size="lg" block>
                Place Your Order
            </Button>
        </div>
    )
}

export default Cart