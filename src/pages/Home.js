import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'

// Component Imports
import BookSelf from '../components/BookSelf/BookShelf'

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

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll()
      const sortedBooks = this.sortBooks(books)
      this.setState({ books: books, bookshelf: sortedBooks, isLoading: false })
    } catch (error) {
      console.log('[Error: error from gettings books] ->', error.message)
    }
  }

  render() {
    const { bookshelf, books } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.isLoading ? <p>books are loading....</p> : Object.keys(bookshelf).map((shelves, index) => <BookSelf key={index} bookself={shelves} books={books} />)}
        </div>
      </div>
    )
  }
}

export default Home
