import React from 'react'
import BookShelfItem from './BookShelfItem'
import PropTypes from 'prop-types'

function BookList(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          <BookShelfItem />
        </ul>
      </div>
    </div>
  )
}

BookList.propTypes = {}

export default BookList
