import React from "react";
import { CardGroup,Card } from 'react-bootstrap';
import Book from './book'

const Dispaly = (props) => {
  const { booklist } = props
    return (
      <div>
        {booklist.map(book => {
          return <Book title={book.title}
                       description={book.description}
                       subtitle={book.subtitle} />
        })}
      </div>
    )
}

export default Dispaly