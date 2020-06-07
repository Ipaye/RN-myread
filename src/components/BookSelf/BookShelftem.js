import React from 'react'
import PropTypes from 'prop-types'

function BookShelfItem(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" />
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">1776</div>
      <div className="book-authors">David McCullough</div>
    </div>
  )
}

BookShelfItem.propTypes = {}

export default BookShelfItem
