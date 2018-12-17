import React from "react";
import { CardGroup,Card,Subtitle } from 'react-bootstrap';

const Book = (props) => {
    const { title,subtitle,description } = props
    return(
        <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default Book