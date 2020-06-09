import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookShelfItem from '../components/BookSelf/BookShelfItem'

class Search extends React.Component {
  state = {
    query: '',
    isLoading: false,
    searchResult: [],
  }

  handleChange = (event) => {
    const queryEntered = event.target.value
    this.setState({ query: queryEntered })

    if (queryEntered !== '') {
      this.setState({ isLoading: true })

      const self = this
      setTimeout(() => {
        self.findBooks(queryEntered)
      }, 5000)
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
      ? this.state.searchResult.map((book) => <BookShelfItem key={book.id} bookDetails={book} onChangeHandler={this.handleOnChange} />)
      : ''
    return (
      <div className="search-books">
        <div className="search-books-bar">
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
