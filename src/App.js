import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Pages imports
import Header from './components/Header/Header'
import Home from './pages/Home'
import Search from './pages/Search'

class BooksApp extends React.Component {
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
