import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI'

// Pages imports
import Header from './components/Header/Header'
import Home from './pages/Home'
import Search from './pages/Search'

class BooksApp extends React.Component {
  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll()
      console.log('[all books] ->', books)
    } catch (error) {
      console.log('[Error: error from gettings books] ->', error.message)
    }
  }
  state = {}

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
