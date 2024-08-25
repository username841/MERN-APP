import React from 'react'
import BookSingleCard from './BookSingleCard';

  const BooksCard = ({books}) => {
  return (
    <div>
        {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
        ))}
    </div>
  )
}

export default BooksCard