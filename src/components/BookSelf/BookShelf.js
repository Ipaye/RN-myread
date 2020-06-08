import React from 'react'
import BookShelfItem from './BookShelfItem'
import PropTypes from 'prop-types'

import './books.css'

function BookShelf(props) {
  console.log('[props] ->', props)
  const { books, bookself } = props

  const changeName = (name) => {
    switch (name) {
      case 'wantToRead':
        return 'Want To Read'
      case 'currentlyReading':
        return 'Currently Reading'
      case 'read':
        return 'Read'

      default:
        return 'Unkown Title'
        break
    }
  }

  const shelfBooks = books.filter((current) => bookself == current.shelf).map((book) => <BookShelfItem key={book.id} bookDetails={book} />)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {changeName(bookself)} </h2>

      <div className="bookshelf-books">
        <div className="books-grid">{shelfBooks}</div>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  bookself: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
}

export default BookShelf
