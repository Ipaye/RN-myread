import React from 'react'
import PropTypes from 'prop-types'

class BookShelfItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readingState: this.getState(),
    }
  }
  getState = () => {
    if (this.props.bookDetails.shelf) {
      return this.props.bookDetails.shelf
    } else if (this.props.searchShelf) {
      return this.props.searchShelf
    } else {
      return 'none'
    }
  }

  handleChange = (event) => {
    this.setState({ readingState: event.target.value })

    this.props.onChangeHandler(this.props.bookDetails, event.target.value)
  }

  render() {
    const { bookDetails } = this.props
    return (
      <div className="book">
        <div className="book-cover">
          <img src={bookDetails.imageLinks ? bookDetails.imageLinks.thumbnail : ''} alt={bookDetails.title} />
        </div>

        <div className="book-description">
          <div className="book-title">{bookDetails.title}</div>
          <div className="book-authors">{bookDetails.authors}</div>
          <div className="book-shelf-changer">
            <select className="select" value={this.state.readingState} onChange={this.handleChange}>
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
}

BookShelfItem.propTypes = {
  bookDetails: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
}

export default BookShelfItem
