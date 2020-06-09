import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'

// Component Imports
import BookSelf from '../components/BookSelf/BookShelf'
import { Link } from 'react-router-dom'

export class Home extends Component {
  state = {
    isLoading: true,
    books: [],
    bookshelf: [],
  }

  sortBooks = (books) => {
    const bookStore = {}

    books.forEach((book) => {
      let bookShelf = book.shelf
      if (!bookStore[bookShelf]) {
        bookStore[bookShelf] = []
      } else {
        bookStore[bookShelf].push(book)
      }
    })

    return bookStore
  }

  handleShelfChange = async (book, shelf) => {
    try {
      const updateResult = await BooksAPI.update(book, shelf)
      console.log('[update result  ] ->', updateResult)
      this.fetchBooks()
    } catch (error) {
      console.log('[error from update] ->', error)
    }
  }

  fetchBooks = async (_) => {
    try {
      const books = await BooksAPI.getAll()
      const sortedBooks = this.sortBooks(books)
      this.setState({ books: books, bookshelf: sortedBooks, isLoading: false })
    } catch (error) {
      console.log('[Error: error from gettings books] ->', error.message)
    }
  }

  async componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { bookshelf, books } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.isLoading ? (
            <p>books are loading....</p>
          ) : (
            Object.keys(bookshelf).map((shelves, index) => (
              <BookSelf key={index} bookself={shelves} handleShelfChange={this.handleShelfChange} books={books} />
            ))
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
