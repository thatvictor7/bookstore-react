import React from "react";
import { CardGroup,Card,Button } from 'react-bootstrap';

const Book = (props) => {
    const { title,subtitle,description,price,addToCart,bookSelect,author,id,inCart } = props
    return(
        <CardGroup>
            <Card className="book-card">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Price: € {price}.00</small>
                
            {!inCart ? <Button onClick={(e) => addToCart(id, true)} value={bookSelect} className="cart" variant="primary" size="sm">Add to Cart</Button>: console.log('eyy')}
                {inCart ? <Button onClick={(e) => addToCart(id,false)} value={bookSelect} className="cart" variant="primary" size="sm">Remove</Button> : console.log("not in cart")}
              </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default Book