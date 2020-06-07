import React from 'react'
import BookListItem from './BookListItem'
import PropTypes from 'prop-types'

function BookList(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          <BookListItem />
        </ul>
      </div>
    </div>
  )
}

BookList.propTypes = {}

export default BookList
