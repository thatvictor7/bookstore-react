import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Cart = (props) => {
    const { addedToCart } = props
    return (
        <div>   
            <ListGroup className="items">
            {/* <div className="basket">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>8</ListGroup.Item>
            </div> */}
                {addedToCart.map(book => {
                    return book["inCart"] ? <ListGroup.Item>{book.title}</ListGroup.Item> : console.log('not added')
                })}
            </ListGroup>
        </div>
    )
}

export default Cart