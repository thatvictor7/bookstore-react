import React from "react";
import Book from './book'

const Dispaly = (props) => {
  const { booklist,addToCart } = props
    return (
      <div className="book-list">
        {booklist.map(book => {
          return <Book addToCart={addToCart}
                       bookSelect={book}
                       id={book.id}
                       inCart={book.inCart}
                       author={book.author}
                       title={book.title}
                       price={book.price}
                       description={book.description}
                       subtitle={book.subtitle} />
        })}
      </div>
    )
}

export default Dispaly