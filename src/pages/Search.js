import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../utils/BooksAPI'
import BookShelfItem from '../components/BookSelf/BookShelfItem'

class Search extends React.Component {
  state = {
    availableBooks: [],
    query: '',
    isLoading: false,
    searchResult: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async (_) => {
    try {
      const books = await BooksAPI.getAll()
      this.setState({ availableBooks: books })
    } catch (error) {
      console.log('[Error: error from gettings books] ->', error.message)
    }
  }

  handleChange = (event) => {
    const queryEntered = event.target.value
    this.setState({ query: event.target.value })

    if (queryEntered !== '') {
      this.setState({ isLoading: true })

      const self = this
      setTimeout(() => {
        self.findBooks(decodeURI(encodeURI(queryEntered)))
      }, 5000)
    } else {
      this.setState({ searchResult: [] })
    }
  }

  findBooks = async (bookName) => {
    try {
      const searchResult = await BooksAPI.search(bookName)

      // Check for errors
      if (searchResult.error) {
        this.setState({ isLoading: false, searchResult: [] })
      } else {
        this.setState({ isLoading: false, searchResult: searchResult })
      }
    } catch (error) {
      this.setState({ isLoading: false })
      console.log('[error from search] ->', error)
    }
  }

  handleOnChange = async (book, shelf) => {
    console.log('[changed in Search] ->', book, shelf)
    try {
      const updateResult = await BooksAPI.update(book, shelf)
      console.log('[update result  ] ->', updateResult)
    } catch (error) {
      console.log('[error from update] ->', error)
    }
  }

  render() {
    const renderSearch = this.state.searchResult
      ? this.state.searchResult.map((book) => {
          const { availableBooks } = this.state
          let renderBookshelf = ''

          availableBooks.forEach((currentbook) => {
            if (currentbook.id == book.id) {
              renderBookshelf = currentbook.shelf
            }
          })

          return <BookShelfItem key={book.id} bookDetails={book} searchShelf={renderBookshelf} onChangeHandler={this.handleOnChange} />
        })
      : ''
    return (
      <div className="search-books" style={{ paddingTop: 20 }}>
        <Link to="/" className="btn btn-black">
          Back
        </Link>
        <div className="search-books-bar" style={{ marginTop: 20 }}>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <div className="books-grid">{this.state.isLoading ? <p>books are loading....</p> : renderSearch}</div>
        </div>
      </div>
    )
  }
}

export default Search
