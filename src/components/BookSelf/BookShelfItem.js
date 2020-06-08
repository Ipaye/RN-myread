import React from 'react'
import PropTypes from 'prop-types'

function BookShelfItem(props) {
  return (
    <div className="book">
      <div className="book-cover">
        <img src="https://marketplace.canva.com/EADanktU9AE/1/0/251w/canva-green-beach-photo-book-cover-o2wPCwYqW2w.jpg" alt="image of something" />
      </div>

      <div class="book-description">
        <div className="book-title">1776</div>
        <div className="book-authors">David McCullough</div>
        <div className="book-shelf-changer">
          <select className="select">
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
  )
}

BookShelfItem.propTypes = {}

export default BookShelfItem
