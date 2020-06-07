import React from 'react'
import BookShelfItem from './BookShelfItem'
import PropTypes from 'prop-types'

import './book.css'

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>

      <div className="bookshelf-books">
        <div className="books-grid">
          <BookShelfItem />
        </div>
      </div>
    </div>
  )
}

BookShelf.propTypes = {}

export default BookShelf
